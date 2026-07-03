import React from 'react';

import { IService } from '@/shared/lib/content/services';

import { SContainer, SDescription, SImage, SItem, SText, STitle } from './servicesList.styles';
import { Magnet } from '@/shared/components/magnet';

interface IServicesList {
  items: IService[];
}

export const ServicesList = ({ items }: IServicesList) => {
  return (
    <SContainer>
      {items.map((service) => {
        return (
          <Magnet padding={10} disabled={false} magnetStrength={10}>
            <SItem key={service.id} href={`/service/${service.id}`}>
              <SImage src={service.coverImage} alt={service.title} />

              <SText>
                <STitle>{service.title}</STitle>
                <SDescription>{service.description}</SDescription>
              </SText>
            </SItem>
          </Magnet>
        );
      })}
    </SContainer>
  );
};
