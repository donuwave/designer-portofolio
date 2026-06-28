import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { unstable_noStore as noStore } from 'next/cache';

export interface IHomeInformation {
  greeting: {
    title: string;
    text: string;
  };
  contacts: {
    title: string;
    items: {
      label: string;
      value: string;
      href: string;
    }[];
    updatedText: string;
  };
}

const homeInformationPath = path.join(process.cwd(), 'public', 'content', 'home.json');

const isHomeInformation = (value: unknown): value is IHomeInformation => {
  if (!value || typeof value !== 'object') return false;

  const greeting = (value as IHomeInformation).greeting;
  const contacts = (value as IHomeInformation).contacts;

  const isValidContacts =
    !!contacts &&
    typeof contacts.title === 'string' &&
    typeof contacts.updatedText === 'string' &&
    Array.isArray(contacts.items) &&
    contacts.items.every(
      (item) =>
        item &&
        typeof item.label === 'string' &&
        typeof item.value === 'string' &&
        typeof item.href === 'string'
    );

  return (
    !!greeting &&
    typeof greeting.title === 'string' &&
    typeof greeting.text === 'string' &&
    isValidContacts
  );
};

export const getHomeInformation = async (): Promise<IHomeInformation> => {
  noStore();

  const fileContent = await readFile(homeInformationPath, 'utf8');
  const parsedContent: unknown = JSON.parse(fileContent);

  if (!isHomeInformation(parsedContent)) {
    throw new Error('Invalid home information JSON structure');
  }

  return parsedContent;
};
