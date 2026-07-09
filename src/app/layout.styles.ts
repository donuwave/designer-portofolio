'use client';

import styled from 'styled-components';
import { layout } from '@/shared/config/layout';

export const SLayout = styled.div`
  max-height: 100%;
  min-height: 100dvh;
  color: white;
  background: #050505;
`;

export const SContainer = styled.div`
  margin: 0 auto;
  padding-top: ${layout.headerOffset};

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    padding-top: calc(${layout.headerTopOffset} + ${layout.headerBaseHeight}px);
  }
`;
