import styled from 'styled-components';
import { Squircle } from '@squircle-js/react';

import { fluidBetween, layout } from '@/shared/config/layout';

export const SServicePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${layout.sectionGap};
  min-height: calc(100dvh - ${layout.headerOffset});
  padding: ${layout.pagePadding} ${layout.pagePadding} 0 ${layout.pagePadding};

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    min-height: calc(100dvh - (${layout.headerTopOffset} + ${layout.headerBaseHeight}px));
  }
`;

export const SFooterArea = styled.div`
  width: 100%;
  margin-top: auto;
  display: grid;
  justify-items: center;
`;

export const SCaseStudyFlow = styled.div`
  display: grid;
  gap: 24px;
  padding-bottom: 24px;
`;

export const SCaseStudyCard = styled.section`
  position: relative;
  width: ${layout.compactWidth};
  display: grid;
  gap: 12px;
  padding: ${fluidBetween(32, 51.2)};
  border-radius: ${fluidBetween(48, 76.8)};
  background: #ffffff;
  box-shadow:
    0 18px 36px rgba(0, 0, 0, 0.18),
    0 4px 10px rgba(0, 0, 0, 0.08);
  z-index: 1;
  justify-self: center;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: min(calc(100vw - (${layout.pagePadding} * 2)), ${layout.compactMaxWidth}px);
    padding: 32px;
    border-radius: 48px;
  }
`;

export const SCaseStudyCardTitle = styled.h2`
  margin: 0;
  color: #191919;
  font-size: ${fluidBetween(16, 25.6)};
  line-height: 1.6;
  font-weight: 700;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 16px;
  }
`;

export const SCaseStudyHeroTitle = styled.h1`
  margin: 0;
  color: #191919;
  font-size: ${fluidBetween(24, 38.4)};
  line-height: 1.2;
  font-weight: 700;
  text-wrap: balance;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 24px;
  }
`;

export const SCaseStudyCardText = styled.p`
  margin: 0;
  color: #7a7a7a;
  font-size: ${fluidBetween(14, 22)};
  line-height: 1.57;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }
`;

export const SCaseStudyHeroText = styled.p`
  margin: 0;
  max-width: 640px;
  color: #5f5f5f;
  font-size: ${fluidBetween(14, 22.4)};
  line-height: 1.6;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }
`;

export const SCaseStudyBullets = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
  color: #7a7a7a;
`;

export const SCaseStudyBulletGroup = styled.div`
  display: grid;
  gap: 10px;
`;

export const SCaseStudyBullet = styled.li`
  font-size: ${fluidBetween(14, 22)};
  line-height: 1.57;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    font-size: 14px;
  }
`;

type MediaClusterProps = {
  $layout: 'feature-left' | 'feature-right';
  $singleItem: boolean;
};

export const SMediaCluster = styled.section<MediaClusterProps>`
  position: relative;
  width: ${({ $singleItem }) => ($singleItem ? layout.compactWidth : layout.wideWidth)};
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ $layout, $singleItem }) =>
    $singleItem
      ? 'minmax(0, 1fr)'
      : $layout === 'feature-left'
        ? 'minmax(0, 1.8fr) minmax(0, 1fr)'
        : 'minmax(0, 1fr) minmax(0, 1.8fr)'};
  grid-template-rows: ${({ $singleItem }) =>
    $singleItem ? 'minmax(260px, auto)' : 'repeat(2, minmax(170px, 1fr))'};
  gap: 24px;
  z-index: 1;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: min(
      calc(100vw - (${layout.pagePadding} * 2)),
      ${({ $singleItem }) => ($singleItem ? layout.compactMaxWidth : layout.wideMaxWidth)}px
    );
  }

  @media (max-width: 990px) {
    grid-template-columns: min(
      calc(100vw - (${layout.pagePadding} * 2)),
      ${layout.compactMaxWidth}px
    );
    grid-template-rows: auto;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

type MediaCardProps = {
  $size: 'large' | 'small';
  $layout: 'feature-left' | 'feature-right';
  $singleItem: boolean;
};

export const SMediaCard = styled(Squircle)<MediaCardProps>`
  overflow: hidden;
  border-radius: 120px;
  min-height: ${({ $size }) => ($size === 'large' ? '420px' : '198px')};
  background:
    radial-gradient(circle at top, rgba(99, 186, 154, 0.22), transparent 44%),
    linear-gradient(180deg, #214d43 0%, #0a1110 100%);
  box-shadow:
    0 28px 56px rgba(0, 0, 0, 0.24),
    0 10px 18px rgba(0, 0, 0, 0.12);

  grid-row: ${({ $size, $singleItem }) =>
    $singleItem ? 'auto' : $size === 'large' ? '1 / span 2' : 'auto'};
  grid-column: ${({ $size, $layout, $singleItem }) => {
    if ($singleItem) return '1';
    if ($size === 'small' && $layout === 'feature-left') return '2';
    if ($size === 'small' && $layout === 'feature-right') return '1';
    if ($layout === 'feature-left') return '1';
    return '2';
  }};

  @media (max-width: 990px) {
    grid-column: auto;
    grid-row: auto;
    min-height: 260px; /* или оставить разные высоты, если хочешь */
  }
`;

export const SMediaImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  opacity: 0.94;
`;

export const SCtaWrap = styled.div`
  width: ${layout.wideWidth};
  padding-top: 16px;
  z-index: 1;

  @media (max-width: ${layout.noScaleBreakpoint}px) {
    width: min(calc(100vw - (${layout.pagePadding} * 2)), ${layout.wideMaxWidth}px);
  }
`;

export const SContactsWrap = styled.div`
  padding-top: 8px;
  z-index: 1;
`;
