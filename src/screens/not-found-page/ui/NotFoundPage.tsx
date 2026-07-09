'use client';

import React from 'react';
import styled from 'styled-components';
import { Squircle } from '@squircle-js/react';
import { layout } from '@/shared/config';
import Link from 'next/link';

export const SItemCard = styled(Squircle)`
  display: grid;
  gap: calc(16px * ${layout.compactScale});
  position: relative;
  padding: calc(32px * ${layout.compactScale});
  background: #ffffff;
  width: ${layout.compactWidth};
  z-index: 1;
  justify-self: center;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: min(calc(100vw - (${layout.pagePadding} * 2)), ${layout.compactMaxWidth}px);
    gap: 16px;
    padding: 32px;
  }
`;

export const SWrapper = styled.div`
  min-height: calc(100dvh - ${layout.headerOffset});
  display: grid;
  place-items: center;
  padding: 16px 0;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    min-height: calc(100dvh - (${layout.headerTopOffset} + ${layout.headerBaseHeight}px));
  }
`;

export const STitle = styled.h2`
  font-size: calc(48px * ${layout.compactScale});
  font-weight: 700;
  color: #191919;
  white-space: pre-line;
  line-height: 1.2;
  letter-spacing: -4%;
  text-align: center;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 24px;
  }
`;

export const SText = styled.p`
  font-size: calc(14px * ${layout.compactScale});
  color: rgba(124, 124, 124, 1);
  white-space: pre-line;
  line-height: 1.5;
  text-align: center;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 16px;
  }
`;

export const SLink = styled(Link)`
  justify-self: center;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  font-size: calc(16px * ${layout.compactScale});
  font-weight: 700;
  line-height: 1.2;
  text-decoration: underline !important;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 16px;
  }
`;

export const NotFoundPage = () => {
  return (
    <SWrapper>
      <SItemCard cornerRadius={48} cornerSmoothing={1}>
        <STitle>404</STitle>
        <SText>Такой страницы больше нет или её адрес изменился — начните с главной</SText>
        <SLink href="/">Вернуться на главную</SLink>
      </SItemCard>
    </SWrapper>
  );
};
