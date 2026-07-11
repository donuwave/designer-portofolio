import React, { FC } from 'react';
import { Button } from 'antd';

import { ContactsCard, WriteMe } from '@/shared/components';
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
  SFooterArea,
  SMediaCard,
  SMediaCluster,
  SMediaImage,
  SServicePage,
} from './servicePage.styles';

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
  const isSingleItem = block.items.length === 1;

  return (
    <SMediaCluster key={key} $layout={block.layout} $singleItem={isSingleItem}>
      <SMediaCard
        cornerRadius={120}
        cornerSmoothing={1}
        $layout={block.layout}
        $size="large"
        $singleItem={isSingleItem}
      >
        <SMediaImage src={featuredItem.src} alt={featuredItem.alt} />
      </SMediaCard>

      {secondaryItems.map((item) => (
        <SMediaCard
          cornerRadius={120}
          cornerSmoothing={1}
          key={`${key}-${item.alt}`}
          $layout={block.layout}
          $size="small"
          $singleItem={false}
        >
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
          {service.description && <SCaseStudyHeroText>{service.description}</SCaseStudyHeroText>}
        </SCaseStudyCard>

        {service.caseStudy?.blocks.map(renderCaseStudyBlock)}
      </SCaseStudyFlow>

      <SFooterArea>
        <WriteMe />

        <ContactsCard items={contacts.items} updatedText={contacts.updatedText} />
      </SFooterArea>
    </SServicePage>
  );
};
