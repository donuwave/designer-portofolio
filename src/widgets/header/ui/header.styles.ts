import styled from 'styled-components';
import Link from 'next/link';

import { fluidBetween, layout } from '@/shared/config/layout';

const iconWidth = `calc(24px * ${layout.compactScale})`;
const iconHeight = `calc(22px * ${layout.compactScale})`;

export const SWrapper = styled.div`
  position: fixed;
  top: ${layout.headerTopOffset};
  left: 0;
  z-index: 50;
  width: 100%;
  display: grid;
  justify-content: center;
  padding: 0 ${layout.pagePadding};
`;

export const SHeader = styled.header`
  background: rgba(14, 14, 14, 1);
  box-shadow:
    0 0 46px -2.88px rgba(88, 88, 88, 1) inset,
    0 0 30px -0.77px rgba(50, 50, 50, 1) inset,
    0 0 22px -0.58px rgba(52, 52, 52, 1) inset,
    0 0 14px -0.19px rgba(188, 188, 188, 1) inset;

  width: ${layout.compactWidth};
  height: calc(72px * ${layout.compactScale});
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(24px * ${layout.compactScale}) calc(32px * ${layout.compactScale});
  border-radius: ${fluidBetween(28, 44)};
  z-index: 10;
  transition: background 0.25s ease;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: min(calc(100vw - (${layout.pagePadding} * 2)), ${layout.compactMaxWidth}px);
    height: 72px;
    padding: 24px 32px;
    border-radius: 28px;
  }
`;

export const SIconLink = styled(Link)`
  width: ${iconWidth};
  height: ${iconHeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transform-origin: center;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: 24px;
    height: 22px;
  }
`;

export const SIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const STextLink = styled(Link)`
  font-weight: bold;
  font-size: ${fluidBetween(14, 22.4)};
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s ease;
  letter-spacing: -4%;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }

  &:hover {
    text-decoration: underline !important;
  }
`;
