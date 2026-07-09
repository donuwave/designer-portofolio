import React, { FC } from 'react';

import { SItemCard, SText, STitle } from './itemCard.styles';

interface IItemCard {
  title: string;
  text: string;
}

export const ItemCard: FC<IItemCard> = ({ title, text }) => {
  return (
    <SItemCard cornerRadius={48} cornerSmoothing={1}>
      <STitle>{title}</STitle>

      <SText>{text}</SText>
    </SItemCard>
  );
};
