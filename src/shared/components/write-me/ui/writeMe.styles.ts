import styled from 'styled-components';
import { Button } from 'antd';

import { layout } from '@/shared/config/layout';

export const SButton = styled(Button)`
  &.ant-btn {
    width: ${layout.wideWidth};
    aspect-ratio: ${layout.wideMaxWidth} / ${layout.buttonHeight};

    background: rgba(14, 14, 14, 1) !important;
    overflow: hidden;

    box-shadow:
      0 0 64px -2.88px rgba(88, 88, 88, 1) inset,
      0 0 48px -0.77px rgba(50, 50, 50, 1) inset,
      0 0 32px -0.58px rgba(52, 52, 52, 1) inset,
      0 0 24px -0.19px rgba(188, 188, 188, 1) inset;

    transition:
      background 0.3s ease,
      box-shadow 0.3s ease;

    @media (max-width: ${layout.noScaleBreakpoint}px) {
      width: min(calc(100vw - (${layout.pagePadding} * 2)), ${layout.wideMaxWidth}px);
    }

    &:hover {
      background: rgba(64, 44, 41, 1) !important;
      box-shadow:
        0 12px 48px -0.19px rgba(118, 131, 231, 1) inset,
        48px 32px 48px -0.77px rgba(156, 56, 78, 1) inset,
        -48px 32px 48px -0.58px rgba(156, 56, 78, 1) inset,
        0 -32px 48px -2.88px rgba(156, 56, 78, 1) inset;
    }
  }
`;
