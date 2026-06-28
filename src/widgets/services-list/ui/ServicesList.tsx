import React from 'react';

import { IService } from '@/shared/lib/content/services';

import { SContainer, SImage, SItem } from './servicesList.styles';

interface IServicesList {
  items: IService[];
}

const columns = 3;
const getCardTilt = (index: number) => {
  const column = index % columns;

  if (column === 0) return 12;
  if (column === columns - 1) return -12;
  return 0;
};

export const ServicesList = ({ items }: IServicesList) => {
  return (
    <SContainer>
      {items.map((service, index) => {
        const tilt = getCardTilt(index);

        return (
          <SItem key={service.id} href={`/service/${service.id}`} $rotateY={tilt}>
            <SImage src={service.coverImage} alt={service.title} />
            <span>{service.title}</span>
          </SItem>
        );
      })}
    </SContainer>
  );
};
