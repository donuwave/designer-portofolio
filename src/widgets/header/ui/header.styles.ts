import styled from 'styled-components';
import Link from 'next/link';

export const SWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  padding: 0 16px;

  @media (max-width: 425px) {
    justify-content: normal;
  }
`;

export const SHeader = styled.header`
  box-shadow: 0 0 54px -0.19px #bcbcbc inset;
  background: rgba(14, 14, 14, 1);
  max-width: 390px;
  width: 390px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  border-radius: 28px;
  z-index: 10;

  @media (max-width: 425px) {
    width: 100% !important;
  }
`;

export const SLink = styled(Link)`
  text-decoration: underline !important;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #7079ff;
  }
`;
