import styled from 'styled-components';

export const SPixelBlast = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const SContainer = styled.div`
  width: 100%;
  height: 100dvh;
  position: absolute;
`;

export const SViewportDots = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 20;
`;

type ViewportDotProps = {
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $translate?: string;
};

export const SViewportDot = styled.span<ViewportDotProps>`
  position: absolute;
  width: 6px;
  height: 6px;
  top: ${({ $top }) => $top ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
  bottom: ${({ $bottom }) => $bottom ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};
  transform: ${({ $translate }) => $translate ?? 'none'};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.18) inset,
    0 0 18px rgba(255, 255, 255, 0.12);
  backdrop-filter: invert(1);
  -webkit-backdrop-filter: invert(1);

  @supports not ((backdrop-filter: invert(1)) or (-webkit-backdrop-filter: invert(1))) {
    background: #fff;
    mix-blend-mode: difference;
  }
`;
