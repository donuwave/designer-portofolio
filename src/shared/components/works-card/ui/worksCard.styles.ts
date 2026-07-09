import styled from 'styled-components';
import { Squircle } from '@squircle-js/react';

import { layout } from '@/shared/config/layout';

export const SWorks = styled.div`
  background: #ffffff;
  padding: calc(32px * ${layout.compactScale});
  z-index: 1;
  border-radius: calc(48px * ${layout.compactScale});
  width: ${layout.compactWidth};
  margin-top: calc(24px * ${layout.compactScale});
  justify-self: center;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: min(calc(100vw - (${layout.pagePadding} * 2)), ${layout.compactMaxWidth}px);
    padding: 32px;
    border-radius: 48px;
    margin-top: 24px;
  }
`;

export const SWorkItem = styled.div`
  display: grid;
  gap: 6px;
`;

export const SCompanyLogo = styled.div`
  width: calc(48px * ${layout.compactScale});
  height: calc(48px * ${layout.compactScale});

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: 48px;
    height: 48px;
  }
`;

export const SText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #7c7c7c;
`;

export const SWork = styled(Squircle)`
  display: grid;
  background: #f0f0f0;
  grid-template-columns: calc(48px * ${layout.compactScale}) 1fr;
  gap: calc(20px * ${layout.compactScale});
  border-radius: calc(8px * ${layout.compactScale});
  padding: calc(16px * ${layout.compactScale});

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    grid-template-columns: 48px 1fr;
    gap: 20px;
    border-radius: 8px;
    padding: 16px;
  }
`;

export const SList = styled.div`
  display: grid;
  gap: calc(8px * ${layout.compactScale});
  padding: calc(16px * ${layout.compactScale}) 0 calc(32px * ${layout.compactScale}) 0;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    gap: 8px;
    padding: 16px 0 32px 0;
  }
`;

export const STitle = styled.h2`
  font-size: calc(16px * ${layout.compactScale});
  font-weight: 700;
  color: rgba(25, 25, 25, 1);

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 16px;
  }
`;

export const STitlePrice = styled.h2`
  font-size: calc(20px * ${layout.compactScale});
  font-weight: 700;
  color: rgba(25, 25, 25, 1);
  font-style: Regular;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 20px;
  }
`;

export const SInfo = styled.span`
  color: rgba(124, 124, 124, 1);
  font-weight: 700;
  font-size: calc(16px * ${layout.compactScale});

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 16px;
  }
`;

export const SDescription = styled.p`
  font-size: calc(14px * ${layout.compactScale});
  line-height: 140%;
  color: rgba(124, 124, 124, 1);

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }
`;

export const SInfoText = styled.div`
  display: grid;
  gap: calc(6px * ${layout.compactScale});
  padding: calc(16px * ${layout.compactScale}) 0;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    gap: 6px;
    padding: 16px 0;
  }
`;

export const SBr = styled.div`
  width: 100%;
  height: 1px;
  background: #e9e9e9;
`;

export const STools = styled.div`
  padding-top: calc(16px * ${layout.compactScale});
  display: grid;
  gap: calc(16px * ${layout.compactScale});

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    padding-top: 16px;
    gap: 16px;
  }
`;

export const SToolsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(8px * ${layout.compactScale});

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    gap: 8px;
  }
`;
