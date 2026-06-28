import type { Metadata } from 'next';

import { getServicesContent } from '@/shared/lib/content/services';

import { AdminServicesEditor } from './ui/AdminServicesEditor';

export const metadata: Metadata = {
  title: 'Редактор сервисов',
};

export default async function AdminServicesPage() {
  const content = await getServicesContent();

  return <AdminServicesEditor initialContent={content} />;
}
