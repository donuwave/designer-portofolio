import styled from 'styled-components';
import { Squircle } from '@squircle-js/react';

import { layout } from '@/shared/config/layout';

export const SContainer = styled.div`
  display: grid;
  width: ${layout.wideWidth};
  grid-template-columns: 1fr 1fr 1fr;
  gap: calc(32px * ${layout.wideScale});
  padding: ${layout.sectionPadding} 0;
  margin: 0 auto;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: min(calc(100vw - (${layout.pagePadding} * 2)), ${layout.wideMaxWidth}px);
    gap: 32px;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const SItem = styled(Squircle)`
  display: grid;
  grid-template-rows: calc(213px * ${layout.wideScale}) calc(70px * ${layout.wideScale});
  gap: calc(6px * ${layout.wideScale});
  justify-items: center;
  align-content: space-between;
  padding-top: calc(32px * ${layout.wideScale});
  padding-bottom: calc(32px * ${layout.wideScale});

  aspect-ratio: 1 / 1;
  width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow:
    0 0 64px -2.88px rgba(88, 88, 88, 1) inset,
    0 0 48px -0.77px rgba(50, 50, 50, 1) inset,
    0 0 32px -0.58px rgba(52, 52, 52, 1) inset,
    0 0 24px -0.19px rgba(188, 188, 188, 1) inset;
  z-index: 1000;
  background: rgba(14, 14, 14, 1);
  color: #ffffff;
  text-decoration: none;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    grid-template-rows: 213px 70px;
    gap: 6px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const SImage = styled.img`
  width: calc(213px * ${layout.wideScale});
  height: calc(213px * ${layout.wideScale});

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: 213px;
    height: 213px;
  }
`;

export const SText = styled.div`
  justify-self: left;
  display: grid;
  align-content: start;
  gap: calc(8px * ${layout.wideScale});
  padding: 0 calc(32px * ${layout.wideScale});
  height: 100%;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    gap: 8px;
    padding: 0 32px;
  }
`;

export const STitle = styled.p`
  font-size: calc(16px * ${layout.wideScale});
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  letter-spacing: -4%;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 16px;
  }
`;

export const SDescription = styled.p`
  color: rgba(124, 124, 124, 1);
  font-size: calc(14px * ${layout.wideScale});
  line-height: 140%;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }
`;
