import styled from 'styled-components';

import { layout } from '@/shared/config/layout';

export const SHome = styled.div`
  display: grid;
  justify-items: center;
  padding: 48px ${layout.pagePadding} 0;
`;

export const SAvatar = styled.div`
  width: calc(175px * ${layout.compactScale});
  height: calc(175px * ${layout.compactScale});
  margin-bottom: 48px;
  z-index: 1;
  justify-self: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: 175px;
    height: 175px;
  }
`;
