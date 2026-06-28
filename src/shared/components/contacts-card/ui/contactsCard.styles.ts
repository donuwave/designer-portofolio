import styled from 'styled-components';

export const SContactsCard = styled.section`
  width: min(390px, calc(100vw - 32px));
  padding: 100px 0;
  border-radius: 32px;
  background: #050505;
  z-index: 1;
  justify-self: center;
`;

export const SRows = styled.div`
  margin-top: 12px;
  border-top: 2px dashed rgba(255, 255, 255, 0.38);
`;

export const SRow = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 16px;
  padding: 14px 0 12px;
  border-bottom: 2px dashed rgba(255, 255, 255, 0.38);
`;

export const SLabel = styled.span`
  font-family: 'SFMono-Regular', 'SF Mono', 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
`;

export const SValue = styled.a`
  justify-self: end;
  max-width: 100%;
  font-family: 'SFMono-Regular', 'SF Mono', 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.92);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
  text-align: right;
  transition: 0.3s;

  &:hover {
    color: #7079ff;
  }
`;

export const SFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 18px;
`;

export const SUpdatedText = styled.span`
  font-family: 'SFMono-Regular', 'SF Mono', 'IBM Plex Mono', 'Menlo', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.38);
`;

export const SIconBadge = styled.span`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  color: rgba(255, 255, 255, 0.62);
  flex-shrink: 0;
`;
