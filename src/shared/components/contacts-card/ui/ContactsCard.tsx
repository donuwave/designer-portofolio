'use client';

import React, { FC } from 'react';
import { useFluidValue } from '@/shared/lib/useFluidValue';

import { FooterInformation, FooterTop } from '@/shared/assets';

import {
  SBottomEffect,
  SCard,
  SContact,
  SContactItem,
  SContainer,
  SContent,
  SDivider,
  SLink,
  SMetaText,
} from './contactsCard.styles';

export interface IContactsCardItem {
  label: string;
  value: string;
  href: string;
}

interface IContactsCard {
  items: IContactsCardItem[];
  updatedText: string;
}

export const ContactsCard: FC<IContactsCard> = ({ items }) => {
  const cornerRadius = useFluidValue(48, 76.8);

  return (
    <SContainer>
      <SBottomEffect />

      <SCard cornerRadius={cornerRadius} cornerSmoothing={1}>
        <SContent>
          <FooterTop />
          <FooterInformation />

          <SContact>
            {items.map((el, i) => (
              <React.Fragment key={el.href}>
                <SDivider
                  viewBox="0 0 390 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="1"
                    y1="1"
                    x2="389"
                    y2="0.999966"
                    stroke="#7C7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="10 10"
                  />
                </SDivider>

                <SContactItem>
                  <span>{el.label}</span>
                  <SLink href={el.href}>{el.value}</SLink>
                </SContactItem>

                {i === 2 && (
                  <SDivider
                    viewBox="0 0 390 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="1"
                      y1="1"
                      x2="389"
                      y2="0.999966"
                      stroke="#7C7C7C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="10 10"
                    />
                  </SDivider>
                )}
              </React.Fragment>
            ))}
          </SContact>

          <SMetaText>*Meta запрещена в России</SMetaText>
        </SContent>
      </SCard>
    </SContainer>
  );
};
