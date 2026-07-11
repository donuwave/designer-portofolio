'use client';

import React, { FC } from 'react';
import { useFluidValue } from '@/shared/lib/useFluidValue';

import { SItemCard, SText, STitle } from './itemCard.styles';

interface IItemCard {
  title: string;
  text: string;
}

export const ItemCard: FC<IItemCard> = ({ title, text }) => {
  const cornerRadius = useFluidValue(48, 76.8);

  return (
    <SItemCard cornerRadius={cornerRadius} cornerSmoothing={1}>
      <STitle>{title}</STitle>

      <SText>{text}</SText>
    </SItemCard>
  );
};
