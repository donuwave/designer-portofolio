import Link from 'next/link';
import styled from 'styled-components';

export const SContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 100px 0;
  max-width: 1108px;
  margin: 0 auto;
`;

export const SItem = styled(Link)`
  display: grid;
  grid-template-rows: 213px 70px;
  gap: 6px;
  justify-items: center;
  align-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;

  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  box-shadow:
    0 0 64px -2.88px rgba(88, 88, 88, 1) inset,
    0 0 48px -0.77px rgba(50, 50, 50, 1) inset,
    0 0 32px -0.58px rgba(52, 52, 52, 1) inset,
    0 0 24px -0.19px rgba(188, 188, 188, 1) inset;
  z-index: 1000;
  background: #111;
  color: #ffffff;
  text-decoration: none;
`;

export const SImage = styled.img`
  width: 213px;
  height: 213px;
`;

export const SText = styled.div`
  justify-self: left;
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 0 32px;
  height: 100%;
`;

export const STitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  letter-spacing: -4%;
`;

export const SDescription = styled.p`
  color: rgba(124, 124, 124, 1);
  font-size: 14px;
  line-height: 140%;
`;
