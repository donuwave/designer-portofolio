import React, { FC } from 'react';

import { SItemCard, SText, STitle } from './itemCard.styles';

interface IItemCard {
  title: string;
  text: string;
}

export const ItemCard: FC<IItemCard> = ({ title, text }) => {
  return (
    <SItemCard>
      <STitle>{title}</STitle>

      <SText>{text}</SText>
    </SItemCard>
  );
};
