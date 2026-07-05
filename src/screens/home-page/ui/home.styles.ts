import styled from 'styled-components';
import { Button } from 'antd';

export const SHome = styled.div`
  display: grid;
  padding: 48px 16px 0 16px;
`;

export const SAvatar = styled.div`
  margin-bottom: 48px;
  z-index: 1;
  justify-self: center;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    position: relative;
    max-width: 1100px;
    width: 100%;
    height: 156px;
    margin: 0 auto;

    padding: 0;
    border: none !important;
    border-radius: 48px;

    background: #272323 !important;
    color: #ffffff !important;

    font-size: 24px;
    font-weight: 700;

    overflow: hidden;

    box-shadow:
      0 0 64px -2.88px rgba(88, 88, 88, 1) inset,
      0 0 48px -0.77px rgba(50, 50, 50, 1) inset,
      0 0 32px -0.58px rgba(52, 52, 52, 1) inset,
      0 0 24px -0.19px rgba(188, 188, 188, 1) inset;

    transition:
      background 0.3s ease,
      box-shadow 0.3s ease,
      color 0.3s ease;
  }

  .hover-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    opacity: 0;
    z-index: 0;

    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  &.ant-btn:hover,
  &.ant-btn:focus-visible {
    color: #ffffff !important;
  }

  &.ant-btn:hover .hover-svg,
  &.ant-btn:focus-visible .hover-svg {
    opacity: 1;
  }

  &.ant-btn span {
    position: relative;
    z-index: 1;
  }

  &.ant-btn:active {
    transform: none !important;
  }

  @media (max-width: 1100px) {
    .hover-svg {
      display: none !important;
    }
  }
`;
