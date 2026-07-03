import React from 'react';
import Image from 'next/image';

import { iteco, redCat } from '@/shared/assets';

import {
  SBr,
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

  return (
    <SWorks>
      <SText>Места работы</SText>

      <SList>
        <SWork>
          <Image alt="iteco" src={iteco} width={48} height={48} priority />

          <SWorkItem>
            <STitle>ITECO Technology</STitle>
            <SInfo>Продуктовый дизайнер</SInfo>
          </SWorkItem>
        </SWork>

        <SWork>
          <Image alt="iteco" src={redCat} width={48} height={48} priority />

          <SWorkItem>
            <STitle>RedCat</STitle>
            <SInfo>Продуктовый дизайнер</SInfo>
          </SWorkItem>
        </SWork>
      </SList>

      <SText>Опыт в цифрах</SText>

      <SInfoText>
        <STitlePrice>900 000 000 ₽</STitlePrice>
        <SInfo>Стоимость проекта, в котором я принимал участие</SInfo>
      </SInfoText>

      <SBr />

      <SInfoText>
        <STitlePrice>88,8% Adoption Rate</STitlePrice>
        <SInfo>Результат внедрения геймификации в корпоративное приложение для сотрудников</SInfo>
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
