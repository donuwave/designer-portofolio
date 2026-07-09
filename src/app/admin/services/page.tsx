import type { Metadata } from 'next';

import { getServicesContent } from '@/shared/lib/content/services';
import { getMediaLibrary } from '@/shared/lib/media-library';

import { AdminServicesEditor } from './ui/AdminServicesEditor';

export const metadata: Metadata = {
  title: 'Редактор сервисов',
};

export default async function AdminServicesPage() {
  const [content, mediaLibrary] = await Promise.all([getServicesContent(), getMediaLibrary()]);

  return <AdminServicesEditor initialContent={content} initialMediaLibrary={mediaLibrary} />;
}
