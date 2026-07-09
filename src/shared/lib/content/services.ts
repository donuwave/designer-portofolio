import { readFile, writeFile } from 'node:fs/promises';

import { unstable_noStore as noStore } from 'next/cache';
import { ensureServicesContentFile } from '@/shared/lib/storage';

export interface IServiceTextCardBlock {
  type: 'text-card';
  title: string;
  paragraphs?: string[];
  bullets?: IServiceTextCardBulletGroup[];
}

export interface IServiceTextCardBulletGroup {
  text?: string;
  list: string[];
}

export interface IServiceMediaItem {
  src: string;
  alt: string;
}

export interface IServiceMediaClusterBlock {
  type: 'media-cluster';
  layout: 'feature-left' | 'feature-right';
  items: IServiceMediaItem[];
}

export interface IServiceCtaBlock {
  type: 'cta';
  label: string;
  href: string;
}

export type IServiceCaseStudyBlock =
  | IServiceTextCardBlock
  | IServiceMediaClusterBlock
  | IServiceCtaBlock;

export interface IServiceCaseStudy {
  blocks: IServiceCaseStudyBlock[];
}

export interface IService {
  id: string;
  title: string;
  listDescription: string;
  description: string;
  coverImage: string;
  href?: string;
  caseStudy?: IServiceCaseStudy;
}

export interface IServicesContent {
  services: IService[];
}

const isServiceMediaItem = (value: unknown): value is IServiceMediaItem => {
  if (!value || typeof value !== 'object') return false;

  const item = value as IServiceMediaItem;

  return typeof item.src === 'string' && typeof item.alt === 'string';
};

const isServiceTextCardBulletGroup = (value: unknown): value is IServiceTextCardBulletGroup => {
  if (!value || typeof value !== 'object') return false;

  const bulletGroup = value as IServiceTextCardBulletGroup;

  return (
    (bulletGroup.text === undefined || typeof bulletGroup.text === 'string') &&
    Array.isArray(bulletGroup.list) &&
    bulletGroup.list.length > 0 &&
    bulletGroup.list.every((item) => typeof item === 'string')
  );
};

const isServiceCaseStudyBlock = (value: unknown): value is IServiceCaseStudyBlock => {
  if (!value || typeof value !== 'object') return false;

  const block = value as IServiceCaseStudyBlock;

  if (block.type === 'text-card') {
    const paragraphsValid =
      block.paragraphs === undefined ||
      (Array.isArray(block.paragraphs) &&
        block.paragraphs.every((item) => typeof item === 'string'));
    const bulletsValid =
      block.bullets === undefined ||
      (Array.isArray(block.bullets) && block.bullets.every(isServiceTextCardBulletGroup));

    return typeof block.title === 'string' && paragraphsValid && bulletsValid;
  }

  if (block.type === 'media-cluster') {
    return (
      (block.layout === 'feature-left' || block.layout === 'feature-right') &&
      Array.isArray(block.items) &&
      block.items.length > 0 &&
      block.items.every(isServiceMediaItem)
    );
  }

  if (block.type === 'cta') {
    return typeof block.label === 'string' && typeof block.href === 'string';
  }

  return false;
};

const isService = (value: unknown): value is IService => {
  if (!value || typeof value !== 'object') return false;

  const service = value as IService;
  const caseStudyValid =
    service.caseStudy === undefined ||
    (!!service.caseStudy &&
      Array.isArray(service.caseStudy.blocks) &&
      service.caseStudy.blocks.every(isServiceCaseStudyBlock));

  return (
    typeof service.id === 'string' &&
    typeof service.title === 'string' &&
    typeof service.listDescription === 'string' &&
    (service.description === undefined || typeof service.description === 'string') &&
    typeof service.coverImage === 'string' &&
    (service.href === undefined || typeof service.href === 'string') &&
    caseStudyValid
  );
};

const isHttpsUrl = (value: string) => {
  try {
    const url = new URL(value);

    return url.protocol === 'https:';
  } catch {
    return false;
  }
};

const isServicesContent = (value: unknown): value is IServicesContent => {
  if (!value || typeof value !== 'object') return false;

  const services = (value as IServicesContent).services;

  return Array.isArray(services) && services.every(isService);
};

const validateServicesContent = (value: unknown): IServicesContent => {
  if (!isServicesContent(value)) {
    throw new Error('Invalid services JSON structure');
  }

  const usedIds = new Set<string>();

  value.services.forEach((service, index) => {
    const normalizedId = service.id.trim();
    const normalizedHref = service.href?.trim();

    if (!normalizedId) {
      throw new Error(`Service at index ${index} must have a non-empty id`);
    }

    if (usedIds.has(normalizedId)) {
      throw new Error(`Duplicate service id: ${normalizedId}`);
    }

    usedIds.add(normalizedId);
    service.description = service.description?.trim() ?? '';

    if (normalizedHref) {
      if (!isHttpsUrl(normalizedHref)) {
        throw new Error(
          `Service "${normalizedId}" must use an https URL in href to link to another domain`
        );
      }

      service.href = normalizedHref;
    } else if (service.href !== undefined) {
      delete service.href;
    }
  });

  return value;
};

const readServicesContent = async (): Promise<IServicesContent> => {
  noStore();

  const servicesContentPath = await ensureServicesContentFile();
  const fileContent = await readFile(servicesContentPath, 'utf8');
  const parsedContent: unknown = JSON.parse(fileContent);

  return validateServicesContent(parsedContent);
};

export const getServicesContent = async (): Promise<IServicesContent> => readServicesContent();

export const saveServicesContent = async (value: unknown): Promise<IServicesContent> => {
  const content = validateServicesContent(value);
  const servicesContentPath = await ensureServicesContentFile();

  await writeFile(servicesContentPath, `${JSON.stringify(content, null, 2)}\n`, 'utf8');

  return content;
};

export const getServices = async (): Promise<IService[]> => {
  const content = await readServicesContent();

  return content.services;
};

export const getServiceById = async (id: string): Promise<IService | null> => {
  const services = await getServices();

  return services.find((service) => service.id === id) ?? null;
};
