import styled from 'styled-components';

import { layout } from '@/shared/config/layout';

export const SToolsCard = styled.div`
  background: rgba(240, 240, 240, 1);
  border-radius: calc(20px * ${layout.compactScale});
  padding: calc(16px * ${layout.compactScale});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: calc(8px * ${layout.compactScale});

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    border-radius: 20px;
    padding: 16px;
    gap: 8px;
  }
`;

export const STitle = styled.h3`
  color: rgba(25, 25, 25, 1);
  font-size: calc(14px * ${layout.compactScale});
  line-height: 120%;
  font-weight: 700;
  justify-self: center;
  text-align: center;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }
`;

export const SIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: calc(8px * ${layout.compactScale});

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    gap: 8px;
  }
`;

export const SIconSlot = styled.div`
  width: calc(48px * ${layout.compactScale});
  height: calc(48px * ${layout.compactScale});
  display: flex;
  align-items: center;
  justify-content: center;

  > svg,
  > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: 48px;
    height: 48px;
  }
`;
