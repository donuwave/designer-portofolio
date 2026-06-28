import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { MyContacts } from '@/shared/assets';

import {
  SContactsCard,
  SFooter,
  SIconBadge,
  SLabel,
  SRow,
  SRows,
  SUpdatedText,
  SValue,
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

export const ContactsCard: FC<IContactsCard> = ({ items, updatedText }) => {
  return (
    <SContactsCard>
      <MyContacts />

      <SRows>
        {items.map((item) => {
          const isExternalLink = item.href.startsWith('http');

          return (
            <SRow key={`${item.label}-${item.value}`}>
              <SLabel>{item.label}</SLabel>
              <SValue
                href={item.href}
                target={isExternalLink ? '_blank' : undefined}
                rel={isExternalLink ? 'noreferrer' : undefined}
              >
                {item.value}
              </SValue>
            </SRow>
          );
        })}
      </SRows>

      <SFooter>
        <SUpdatedText>{updatedText}</SUpdatedText>

        <SIconBadge aria-hidden="true">
          <FontAwesomeIcon icon={faGlobe} />
        </SIconBadge>
      </SFooter>
    </SContactsCard>
  );
};
