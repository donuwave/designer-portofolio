import React, { FC } from 'react';
import { Button } from 'antd';

import { ContactsCard } from '@/shared/components';
import {
  IService,
  IServiceCaseStudyBlock,
  IServiceMediaClusterBlock,
  IServiceTextCardBlock,
} from '@/shared/lib/content/services';

import {
  SCaseStudyBullet,
  SCaseStudyBulletGroup,
  SCaseStudyBullets,
  SCaseStudyCard,
  SCaseStudyCardText,
  SCaseStudyHeroText,
  SCaseStudyHeroTitle,
  SCaseStudyCardTitle,
  SCaseStudyFlow,
  SCtaWrap,
  SMediaCard,
  SMediaCluster,
  SMediaImage,
  SServicePage,
} from './servicePage.styles';
import { SButton } from '@/screens/home-page/ui/home.styles';
import { ButtonHoverSvg } from '@/shared/assets';

interface IServiceContacts {
  items: {
    label: string;
    value: string;
    href: string;
  }[];
  updatedText: string;
}

interface IServicePage {
  service: IService;
  contacts: IServiceContacts;
}

const renderTextCard = (block: IServiceTextCardBlock, key: string) => {
  const hasParagraphs = Array.isArray(block.paragraphs) && block.paragraphs.length > 0;
  const hasBullets = Array.isArray(block.bullets) && block.bullets.length > 0;

  return (
    <SCaseStudyCard key={key}>
      <SCaseStudyCardTitle>{block.title}</SCaseStudyCardTitle>

      {hasParagraphs &&
        block.paragraphs?.map((paragraph) => (
          <SCaseStudyCardText key={`${key}-${paragraph}`}>{paragraph}</SCaseStudyCardText>
        ))}

      {hasBullets &&
        block.bullets?.map((bulletGroup, index) => (
          <SCaseStudyBulletGroup key={`${key}-bullet-group-${index}`}>
            {bulletGroup.text && <SCaseStudyCardText>{bulletGroup.text}</SCaseStudyCardText>}

            <SCaseStudyBullets>
              {bulletGroup.list.map((bullet) => (
                <SCaseStudyBullet key={`${key}-${index}-${bullet}`}>{bullet}</SCaseStudyBullet>
              ))}
            </SCaseStudyBullets>
          </SCaseStudyBulletGroup>
        ))}
    </SCaseStudyCard>
  );
};

const renderMediaCluster = (block: IServiceMediaClusterBlock, key: string) => {
  const [featuredItem, ...secondaryItems] = block.items;

  return (
    <SMediaCluster key={key} $layout={block.layout}>
      <SMediaCard $layout={block.layout} $size="large">
        <SMediaImage src={featuredItem.src} alt={featuredItem.alt} />
      </SMediaCard>

      {secondaryItems.map((item) => (
        <SMediaCard key={`${key}-${item.alt}`} $layout={block.layout} $size="small">
          <SMediaImage src={item.src} alt={item.alt} />
        </SMediaCard>
      ))}
    </SMediaCluster>
  );
};

const renderCaseStudyBlock = (block: IServiceCaseStudyBlock, index: number) => {
  const key = `${block.type}-${index}`;

  if (block.type === 'text-card') {
    return renderTextCard(block, key);
  }

  if (block.type === 'media-cluster') {
    return renderMediaCluster(block, key);
  }

  return (
    <SCtaWrap key={key}>
      <Button type="primary" size="large" block href={block.href}>
        {block.label}
      </Button>
    </SCtaWrap>
  );
};

export const ServicePage: FC<IServicePage> = ({ service, contacts }) => {
  return (
    <SServicePage>
      <SCaseStudyFlow>
        <SCaseStudyCard>
          <SCaseStudyHeroTitle>{service.title}</SCaseStudyHeroTitle>
          <SCaseStudyHeroText>{service.description}</SCaseStudyHeroText>
        </SCaseStudyCard>

        {service.caseStudy?.blocks.map(renderCaseStudyBlock)}
      </SCaseStudyFlow>

      <SButton size="large">
        <ButtonHoverSvg className="hover-svg" />
        Написать мне
      </SButton>

      <ContactsCard items={contacts.items} updatedText={contacts.updatedText} />
    </SServicePage>
  );
};
