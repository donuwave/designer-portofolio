import styled from 'styled-components';

export const SServicePage = styled.div`
  display: grid;
  gap: 48px;
  padding: 120px 0 0;
`;

export const SCaseStudyFlow = styled.div`
  display: grid;
  gap: 24px;
  padding-bottom: 24px;
`;

export const SCaseStudyCard = styled.section`
  position: relative;
  width: min(390px, calc(100vw - 32px));
  display: grid;
  gap: 12px;
  padding: 24px;
  border-radius: 48px;
  background: #ffffff;
  box-shadow:
    0 18px 36px rgba(0, 0, 0, 0.18),
    0 4px 10px rgba(0, 0, 0, 0.08);
  z-index: 1;
  justify-self: center;
`;

export const SCaseStudyCardTitle = styled.h2`
  margin: 0;
  color: #191919;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 700;
`;

export const SCaseStudyHeroTitle = styled.h1`
  margin: 0;
  color: #191919;
  font-size: 24px;
  font-weight: 700;
  text-wrap: balance;
`;

export const SCaseStudyCardText = styled.p`
  margin: 0;
  color: #7a7a7a;
  font-size: 14px;
  line-height: 1.55;
`;

export const SCaseStudyHeroText = styled.p`
  margin: 0;
  max-width: 640px;
  color: #5f5f5f;
  font-size: 14px;
  line-height: 1.55;
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
  font-size: 14px;
  line-height: 1.5;
`;

type MediaClusterProps = {
  $layout: 'feature-left' | 'feature-right';
};

export const SMediaCluster = styled.section<MediaClusterProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $layout }) =>
    $layout === 'feature-left'
      ? 'minmax(0, 1.8fr) minmax(0, 1fr)'
      : 'minmax(0, 1fr) minmax(0, 1.8fr)'};
  grid-template-rows: repeat(2, minmax(170px, 1fr));
  gap: 24px;
  z-index: 1;
`;

type MediaCardProps = {
  $size: 'large' | 'small';
  $layout: 'feature-left' | 'feature-right';
};

export const SMediaCard = styled.div<MediaCardProps>`
  overflow: hidden;
  border-radius: 120px;
  min-height: ${({ $size }) => ($size === 'large' ? '420px' : '198px')};
  background:
    radial-gradient(circle at top, rgba(99, 186, 154, 0.22), transparent 44%),
    linear-gradient(180deg, #214d43 0%, #0a1110 100%);
  box-shadow:
    0 28px 56px rgba(0, 0, 0, 0.24),
    0 10px 18px rgba(0, 0, 0, 0.12);
  grid-row: ${({ $size }) => ($size === 'large' ? '1 / span 2' : 'auto')};
  grid-column: ${({ $size, $layout }) => {
    if ($size === 'small' && $layout === 'feature-left') return '2';
    if ($size === 'small' && $layout === 'feature-right') return '1';
    if ($layout === 'feature-left') return '1';
    return '2';
  }};
`;

export const SMediaImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  opacity: 0.94;
`;

export const SCtaWrap = styled.div`
  width: min(760px, calc(100vw - 32px));
  padding-top: 16px;
  z-index: 1;
`;

export const SContactsWrap = styled.div`
  padding-top: 8px;
  z-index: 1;
`;
