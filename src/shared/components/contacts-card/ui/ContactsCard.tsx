import React, { FC } from 'react';

import { FooterInformation, FooterTop } from '@/shared/assets';

import { SContact, SContactItem, SContainer, SLink } from './contactsCard.styles';

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
  return (
    <SContainer>
      <FooterTop />
      <FooterInformation />
      <SContact>
        {items.map((el, i) => (
          <>
            <svg
              width="390"
              height="2"
              viewBox="0 0 390 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="1"
                x2="389"
                y2="0.999966"
                stroke="#7C7C7C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="10 10"
              />
            </svg>

            <SContactItem key={el.href}>
              <span>{el.label}</span>
              <SLink href={el.href}>{el.value}</SLink>
            </SContactItem>

            {i === 2 && (
              <svg
                width="390"
                height="2"
                viewBox="0 0 390 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1"
                  y1="1"
                  x2="389"
                  y2="0.999966"
                  stroke="#7C7C7C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="10 10"
                />
              </svg>
            )}
          </>
        ))}
      </SContact>
      <span style={{ color: 'rgba(124, 124, 124, 1)' }}>*Meta запрещена в России</span>
    </SContainer>
  );
};
