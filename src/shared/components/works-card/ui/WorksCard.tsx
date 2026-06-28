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
  SWork,
  SWorkItem,
  SWorks,
} from './worksCard.styles';

export const WorksCard = () => {
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
        <STitle>900 000 000 ₽</STitle>
        <SInfo>Стоимость проекта, в котором я принимал участие</SInfo>
      </SInfoText>

      <SBr />

      <SInfoText>
        <STitle>88,8% Adoption Rate</STitle>
        <SInfo>Результат внедрения геймификации в корпоративное приложение для сотрудников</SInfo>
      </SInfoText>
    </SWorks>
  );
};
