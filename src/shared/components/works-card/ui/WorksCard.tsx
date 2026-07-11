'use client';

import React from 'react';
import Image from 'next/image';

import { iteco, redCat } from '@/shared/assets';
import { useFluidValue } from '@/shared/lib/useFluidValue';

import {
  SBr,
  SCompanyLogo,
  SDescription,
  SInfo,
  SInfoText,
  SList,
  SText,
  STitle,
  STitlePrice,
  STools,
  SToolsContainer,
  SWork,
  SWorkItem,
  SWorks,
} from './worksCard.styles';
import { ToolsCard } from '@/shared/components';
import { getTools } from '../lib/get-tools';

export const WorksCard = () => {
  const tools = getTools();
  const cornerRadius = useFluidValue(48, 76.8);

  return (
    <SWorks cornerRadius={cornerRadius} cornerSmoothing={1}>
      <SText>Места работы</SText>

      <SList>
        <SWork cornerRadius={20} cornerSmoothing={1}>
          <SCompanyLogo>
            <Image alt="iteco" src={iteco} width={48} height={48} priority />
          </SCompanyLogo>

          <SWorkItem>
            <STitle>ITECO Technology</STitle>
            <SInfo>Продуктовый дизайнер</SInfo>
          </SWorkItem>
        </SWork>

        <SWork cornerRadius={20} cornerSmoothing={1}>
          <SCompanyLogo>
            <Image alt="iteco" src={redCat} width={48} height={48} priority />
          </SCompanyLogo>

          <SWorkItem>
            <STitle>RedCat</STitle>
            <SInfo>Продуктовый дизайнер</SInfo>
          </SWorkItem>
        </SWork>
      </SList>

      <SText>Опыт в цифрах</SText>

      <SInfoText>
        <STitlePrice>900 000 000 ₽</STitlePrice>
        <SDescription>Стоимость проекта, в котором я принимал участие</SDescription>
      </SInfoText>

      <SBr />

      <SInfoText>
        <STitlePrice>88,8% Adoption Rate</STitlePrice>
        <SDescription>
          Результат внедрения геймификации в корпоративное приложение для сотрудников
        </SDescription>
      </SInfoText>

      <STools>
        <SText>Используемые инструменты</SText>

        <SToolsContainer>
          {tools.map((el) => (
            <ToolsCard key={el.id} title={el.title} icons={el.icons} />
          ))}
        </SToolsContainer>
      </STools>
    </SWorks>
  );
};
