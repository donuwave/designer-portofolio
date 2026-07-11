import styled from 'styled-components';
import Link from 'next/link';
import { Squircle } from '@squircle-js/react';

import { fluidBetween, layout } from '@/shared/config/layout';
import footerBackground from '@/shared/assets/img/footer-background.png';

export const SContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: grid;
  justify-items: center;
  padding: 70px 0 clamp(120px, 18vw, 220px);

  @media (max-width: 800px) {
    padding-top: 40px;
    padding-bottom: 140px;
  }
`;

export const SCard = styled(Squircle)`
  width: ${layout.compactWidth};
  position: relative;
  overflow: hidden;
  background: #ffffff;
  color: #191919;
  padding: calc(32px * ${layout.compactScale});
  display: grid;
  gap: calc(14px * ${layout.compactScale});
  z-index: 1;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: min(calc(100vw - (${layout.pagePadding} * 2)), ${layout.compactMaxWidth}px);
    padding: 32px;
    gap: 14px;
  }
`;

export const SContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: calc(14px * ${layout.compactScale});

  > svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    gap: 14px;
  }
`;

export const SBottomEffect = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  width: 100vw;
  pointer-events: none;
  z-index: 0;
  background: url(${footerBackground.src}) center bottom / cover no-repeat;
`;

export const SContact = styled.div`
  display: grid;
`;

export const SDivider = styled.svg`
  width: 100%;
  height: auto;
  display: block;
`;

export const SContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  gap: 16px;
  font-size: ${fluidBetween(14, 22.4)};
  line-height: 1.6;

  span {
    color: #7c7c7c;
  }

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }
`;

export const SLink = styled(Link)`
  text-decoration: underline !important;
  color: #191919;
  font-size: inherit;
  line-height: inherit;
  transition: color 0.2s;

  &:hover {
    color: #7079ff;
  }
`;

export const SMetaText = styled.span`
  color: #7c7c7c;
  font-size: ${fluidBetween(14, 22.4)};
  line-height: 1.6;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }
`;
