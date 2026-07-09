import styled from 'styled-components';
import Link from 'next/link';

export const SContainer = styled.div`
  margin-top: 70px;
  z-index: 1;
  background: rgba(5, 5, 5, 1);
  display: grid;
  padding: 80px 0 100px 0;
  justify-content: center;
  gap: 14px;
  justify-self: normal;

  @media (max-width: 800px) {
    margin-top: 40px;
    padding: 40px 0 60px 0;
  }
`;

export const SContact = styled.div`
  display: grid;
`;

export const SContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
`;

export const SLink = styled(Link)`
  text-decoration: underline !important;
  color: rgba(255, 255, 255, 1);
  transition: color 0.2s;

  &:hover {
    color: #7079ff;
  }
`;
