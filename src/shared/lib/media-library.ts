import { readdir, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { IServicesContent, getServicesContent } from './content/services';
import { ensureUploadsDirectory, getUploadsDirectory, getUploadsWebDirectory } from './storage';

const maxUploadSize = 10 * 1024 * 1024;
const allowedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif']);

export interface IMediaLibraryItem {
  name: string;
  path: string;
  size: number;
  updatedAt: string;
  usedIn: string[];
}

export interface IMediaLibrarySummary {
  totalFiles: number;
  totalSize: number;
  usedFiles: number;
}

export interface IMediaLibrary {
  items: IMediaLibraryItem[];
  summary: IMediaLibrarySummary;
}

const isLocalUploadPath = (value: string) => value.startsWith(`${getUploadsWebDirectory()}/`);

const normalizeFileName = (fileName: string) => {
  const extension = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, extension).toLowerCase();
  const normalizedBaseName = baseName
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

  return `${normalizedBaseName || 'file'}${extension}`;
};

const getUniqueFileName = async (fileName: string) => {
  const uploadsDirectory = getUploadsDirectory();
  const extension = path.extname(fileName);
  const baseName = path.basename(fileName, extension);

  let candidate = fileName;
  let index = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      await stat(path.join(uploadsDirectory, candidate));
      candidate = `${baseName}-${index}${extension}`;
      index += 1;
    } catch {
      return candidate;
    }
  }
};

const collectUsageMap = (content: IServicesContent) => {
  const usageMap = new Map<string, string[]>();

  const addUsage = (assetPath: string, usageLabel: string) => {
    if (!isLocalUploadPath(assetPath)) {
      return;
    }

    const usages = usageMap.get(assetPath) ?? [];
    usages.push(usageLabel);
    usageMap.set(assetPath, usages);
  };

  content.services.forEach((service) => {
    addUsage(service.coverImage, `${service.id}: cover`);

    service.caseStudy?.blocks.forEach((block, blockIndex) => {
      if (block.type !== 'media-cluster') {
        return;
      }

      block.items.forEach((item, itemIndex) => {
        addUsage(item.src, `${service.id}: media ${blockIndex + 1}.${itemIndex + 1}`);
      });
    });
  });

  return usageMap;
};

const toMediaLibraryItem = async (
  fileName: string,
  usageMap: Map<string, string[]>
): Promise<IMediaLibraryItem> => {
  const uploadsDirectory = getUploadsDirectory();
  const filePath = path.join(uploadsDirectory, fileName);
  const fileStat = await stat(filePath);
  const webPath = `${getUploadsWebDirectory()}/${fileName}`;

  return {
    name: fileName,
    path: webPath,
    size: fileStat.size,
    updatedAt: fileStat.mtime.toISOString(),
    usedIn: usageMap.get(webPath) ?? [],
  };
};

export const getMediaLibrary = async (): Promise<IMediaLibrary> => {
  await ensureUploadsDirectory();
  const uploadsDirectory = getUploadsDirectory();

  const [directoryEntries, content] = await Promise.all([
    readdir(uploadsDirectory, { withFileTypes: true }),
    getServicesContent(),
  ]);

  const usageMap = collectUsageMap(content);
  const fileNames = directoryEntries.filter((entry) => entry.isFile()).map((entry) => entry.name);
  const items = await Promise.all(fileNames.map((fileName) => toMediaLibraryItem(fileName, usageMap)));

  items.sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));

  return {
    items,
    summary: {
      totalFiles: items.length,
      totalSize: items.reduce((total, item) => total + item.size, 0),
      usedFiles: items.filter((item) => item.usedIn.length > 0).length,
    },
  };
};

export const uploadMediaFiles = async (files: File[]): Promise<IMediaLibraryItem[]> => {
  await ensureUploadsDirectory();
  const uploadsDirectory = getUploadsDirectory();

  const uploadedItems: IMediaLibraryItem[] = [];

  for (const file of files) {
    if (!file.name) {
      throw new Error('Файл без имени не поддерживается');
    }

    const extension = path.extname(file.name).toLowerCase();

    if (!allowedExtensions.has(extension)) {
      throw new Error(`Неподдерживаемый формат файла: ${file.name}`);
    }

    if (file.size > maxUploadSize) {
      throw new Error(`Файл ${file.name} превышает лимит 10 MB`);
    }

    const normalizedName = normalizeFileName(file.name);
    const uniqueFileName = await getUniqueFileName(normalizedName);
    const buffer = Buffer.from(await file.arrayBuffer());

    await writeFile(path.join(uploadsDirectory, uniqueFileName), buffer);

    uploadedItems.push({
      name: uniqueFileName,
      path: `${getUploadsWebDirectory()}/${uniqueFileName}`,
      size: buffer.byteLength,
      updatedAt: new Date().toISOString(),
      usedIn: [],
    });
  }

  return uploadedItems;
};

export const deleteMediaFile = async (assetPath: string) => {
  if (!isLocalUploadPath(assetPath)) {
    throw new Error('Можно удалять только файлы из uploads/services');
  }

  const uploadsDirectory = getUploadsDirectory();
  const fileName = path.posix.basename(assetPath);
  const normalizedAssetPath = `${getUploadsWebDirectory()}/${fileName}`;
  const content = await getServicesContent();
  const usageMap = collectUsageMap(content);
  const usedIn = usageMap.get(normalizedAssetPath) ?? [];

  if (usedIn.length > 0) {
    throw new Error(`Файл используется и не может быть удален: ${usedIn.join(', ')}`);
  }

  await unlink(path.join(uploadsDirectory, fileName));
};
