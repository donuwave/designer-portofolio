import styled from 'styled-components';

export const SItemCard = styled.div`
  display: grid;
  gap: 16px;
  position: relative;
  padding: 32px;
  border-radius: 48px;
  background: #ffffff;
  min-width: 390px;
  max-width: 390px;
  z-index: 1;
  justify-self: center;
`;

export const STitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #191919;
  white-space: pre-line;
`;

export const SText = styled.p`
  color: #7c7c7c;
  white-space: pre-line;
`;
