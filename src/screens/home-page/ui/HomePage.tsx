import React from 'react';
import Image from 'next/image';

import { ContactsCard, ItemCard, WorksCard } from '@/shared/components';
import { getServices } from '@/shared/lib/content/services';
import { ServicesList } from '@/widgets/services-list';

import { getHomeInformation } from '../lib/home-information';
import { SAvatar, SHome } from './home.styles';
import { avatar } from '@/shared/assets';
import { WriteMe } from '@/shared/components';

export const HomePage = async () => {
  const [homeInformation, services] = await Promise.all([getHomeInformation(), getServices()]);

  return (
    <SHome>
      <SAvatar>
        <Image priority width={175} height={175} alt="Основное изображение" src={avatar.src} />
      </SAvatar>

      <ItemCard text={homeInformation.greeting.text} title={homeInformation.greeting.title} />
      <WorksCard />

      <ServicesList items={services} />

      <WriteMe />

      <ContactsCard
        items={homeInformation.contacts.items}
        updatedText={homeInformation.contacts.updatedText}
      />
    </SHome>
  );
};
