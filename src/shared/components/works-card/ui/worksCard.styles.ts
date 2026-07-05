import styled from 'styled-components';

export const SWorks = styled.div`
  background: #ffffff;
  padding: 32px;
  z-index: 1;
  border-radius: 48px;
  max-width: 390px;
  margin-top: 24px;
  justify-self: center;
`;

export const SWorkItem = styled.div`
  display: grid;
  gap: 6px;
`;

export const SText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #7c7c7c;
`;

export const SWork = styled.div`
  display: grid;
  background: #f0f0f0;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  padding: 16px;
  border-radius: 8px;
`;

export const SList = styled.div`
  display: grid;
  gap: 8px;
  padding: 16px 0 32px 0;
`;

export const STitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: rgba(25, 25, 25, 1);
`;

export const STitlePrice = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: rgba(25, 25, 25, 1);
  font-style: Regular;
`;

export const SInfo = styled.span`
  color: rgba(124, 124, 124, 1);
  font-weight: 700;
  font-size: 16px;
`;

export const SInfoText = styled.div`
  display: grid;
  gap: 6px;
  padding: 16px 0;
`;

export const SBr = styled.div`
  width: 100%;
  height: 1px;
  background: #e9e9e9;
`;

export const STools = styled.div`
  padding-top: 16px;
  display: grid;
  gap: 16px;
`;

export const SToolsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
