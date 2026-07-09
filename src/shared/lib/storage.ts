import { access, copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const bundledServicesContentPath = path.join(process.cwd(), 'public', 'content', 'services.json');
const bundledUploadsDirectory = path.join(process.cwd(), 'public', 'uploads', 'services');
const uploadsWebDirectory = '/uploads/services';

const storageRoot = process.env.CONTENT_STORAGE_DIR?.trim() || '';

export const getServicesContentPath = () =>
  storageRoot
    ? path.join(storageRoot, 'content', 'services.json')
    : bundledServicesContentPath;

export const getUploadsDirectory = () =>
  storageRoot ? path.join(storageRoot, 'uploads', 'services') : bundledUploadsDirectory;

export const getUploadsWebDirectory = () => uploadsWebDirectory;

export const isExternalStorageEnabled = () => Boolean(storageRoot);

export const ensureServicesContentFile = async () => {
  const servicesContentPath = getServicesContentPath();

  if (!isExternalStorageEnabled()) {
    await mkdir(path.dirname(servicesContentPath), { recursive: true });
    return servicesContentPath;
  }

  await mkdir(path.dirname(servicesContentPath), { recursive: true });

  try {
    await access(servicesContentPath);
  } catch {
    await copyFile(bundledServicesContentPath, servicesContentPath);
  }

  return servicesContentPath;
};

export const ensureUploadsDirectory = async () => {
  const uploadsDirectory = getUploadsDirectory();
  await mkdir(uploadsDirectory, { recursive: true });

  return uploadsDirectory;
};

export const resolveUploadFilePath = (segments: string[]) => {
  const uploadsDirectory = getUploadsDirectory();
  const resolvedPath = path.resolve(uploadsDirectory, ...segments);
  const normalizedUploadsDirectory = path.resolve(uploadsDirectory);

  if (
    resolvedPath !== normalizedUploadsDirectory &&
    !resolvedPath.startsWith(`${normalizedUploadsDirectory}${path.sep}`)
  ) {
    throw new Error('Invalid upload path');
  }

  return resolvedPath;
};
