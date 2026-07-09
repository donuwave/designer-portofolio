import React from 'react';

import { IService } from '@/shared/lib/content/services';

import { SContainer, SDescription, SImage, SItem, SText, STitle } from './servicesList.styles';
import { Magnet } from '@/shared/components/magnet';
import Link from 'next/link';

interface IServicesList {
  items: IService[];
}

export const ServicesList = ({ items }: IServicesList) => {
  return (
    <SContainer>
      {items.map((service) => {
        const serviceHref = service.href?.trim() || `/service/${service.id}`;
        const isExternal = serviceHref.startsWith('https://');

        return (
          <Magnet key={service.id} padding={10} disabled={false} magnetStrength={10}>
            <Link
              href={serviceHref}
              rel={isExternal ? 'noreferrer' : undefined}
              target={isExternal ? '_blank' : undefined}
            >
              <SItem cornerRadius={64} cornerSmoothing={1}>
                <SImage src={service.coverImage} alt={service.title} />

                <SText>
                  <STitle>{service.title}</STitle>
                  <SDescription>{service.listDescription}</SDescription>
                </SText>
              </SItem>
            </Link>
          </Magnet>
        );
      })}
    </SContainer>
  );
};
