import styled from 'styled-components';
import { Squircle } from '@squircle-js/react';

import { layout } from '@/shared/config/layout';

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

export const STitle = styled.h2`
  font-size: calc(24px * ${layout.compactScale});
  font-weight: 700;
  color: #191919;
  white-space: pre-line;
  line-height: 1.2;
  letter-spacing: -4%;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 24px;
  }
`;

export const SText = styled.p`
  font-size: calc(16px * ${layout.compactScale});
  color: #7c7c7c;
  white-space: pre-line;
  line-height: 1.5;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 16px;
  }
`;
