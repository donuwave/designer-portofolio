import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getHomeInformation } from '@/screens/home-page/lib/home-information';
import { ServicePage } from '@/screens/service-page';
import { getServiceById } from '@/shared/lib/content/services';

interface IServiceRoutePageProps {
  params: Promise<{
    id: string;
  }>;
}

export const generateMetadata = async ({ params }: IServiceRoutePageProps): Promise<Metadata> => {
  const { id } = await params;
  const service = await getServiceById(id);

  if (!service) {
    return {
      title: 'Сервис не найден',
    };
  }

  return {
    title: service.title,
    description: service.description || service.listDescription,
  };
};

export default async function Service({ params }: IServiceRoutePageProps) {
  const { id } = await params;
  const [service, homeInformation] = await Promise.all([getServiceById(id), getHomeInformation()]);

  if (!service) {
    notFound();
  }

  return (
    <ServicePage
      service={service}
      contacts={{
        items: homeInformation.contacts.items,
        updatedText: homeInformation.contacts.updatedText,
      }}
    />
  );
}
