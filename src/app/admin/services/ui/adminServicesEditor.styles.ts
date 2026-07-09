import styled from 'styled-components';

export const SPage = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr;
  gap: 24px;
  padding: 24px;
  background: #f5f6f8;
`;

export const SHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const STitleGroup = styled.div`
  display: grid;
  gap: 8px;
`;

export const STitle = styled.h1`
  margin: 0;
  color: #191919;
  font-size: 32px;
  line-height: 1.05;
  font-weight: 700;
`;

export const SSubtitle = styled.p`
  margin: 0;
  color: #5f6672;
  font-size: 14px;
  line-height: 1.5;
`;

export const SHeaderActions = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SLayout = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
`;

export const SSidebar = styled.aside`
  display: grid;
  gap: 16px;
  align-self: start;
`;

export const SPanel = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  gap: 16px;
  padding: 20px;
  border: 1px solid #d8dde6;
  border-radius: 12px;
  background: #ffffff;
`;

export const SPanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SPanelTitle = styled.h2`
  margin: 0;
  color: #191919;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
`;

export const SServiceList = styled.div`
  display: grid;
  gap: 8px;
`;

export const SHiddenFileInput = styled.input`
  display: none;
`;

export const SMediaSummary = styled.div`
  display: grid;
  gap: 8px;
  padding: 12px;
  border: 1px solid #edf0f4;
  border-radius: 10px;
  background: #fafbfc;
`;

export const SMediaSummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #48505d;
  font-size: 12px;
  line-height: 1.4;
`;

export const SMediaList = styled.div`
  display: grid;
  gap: 10px;
`;

export const SMediaItem = styled.div`
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 10px;
  border: 1px solid #edf0f4;
  border-radius: 10px;
  background: #fafbfc;
`;

export const SMediaPreview = styled.img`
  width: 56px;
  height: 56px;
  display: block;
  border-radius: 8px;
  object-fit: cover;
  background: #e8ebf0;
`;

export const SMediaMeta = styled.div`
  min-width: 0;
  display: grid;
  gap: 6px;
`;

export const SMediaName = styled.p`
  margin: 0;
  color: #191919;
  font-size: 12px;
  line-height: 1.35;
  font-weight: 700;
  word-break: break-word;
`;

export const SMediaDetails = styled.p`
  margin: 0;
  color: #66707d;
  font-size: 11px;
  line-height: 1.4;
  word-break: break-word;
`;

export const SMediaUsage = styled.p`
  margin: 0;
  color: #8b6270;
  font-size: 11px;
  line-height: 1.4;
  word-break: break-word;
`;

export const SSelectPreview = styled.img`
  width: 100%;
  max-width: 200px;
  display: block;
  border: 1px solid #edf0f4;
  border-radius: 12px;
  background: #f2f4f7;
  object-fit: cover;
`;

export const SEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SSection = styled.section`
  height: max-content;
  gap: 16px;
  padding: 20px;
  border: 1px solid #d8dde6;
  border-radius: 12px;
  background: #ffffff;
`;

export const SSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const SSectionTitle = styled.h3`
  margin: 0;
  color: #191919;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
`;

export const SFieldGrid = styled.div`
  display: grid;
  gap: 16px;
`;

export const SFieldLabel = styled.label`
  display: grid;
  gap: 8px;
  color: #373d46;
  font-size: 13px;
  line-height: 1.4;
  font-weight: 600;
`;

export const SBlockStack = styled.div`
  display: grid;
  gap: 16px;
`;

export const SBlockCard = styled.section`
  display: grid;
  gap: 16px;
  padding: 18px;
  border: 1px solid #d8dde6;
  border-radius: 12px;
  background: #fbfbfc;
`;

export const SBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SBlockTitle = styled.h4`
  margin: 0;
  color: #191919;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SInlineActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const SSubsection = styled.div`
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px dashed #cfd5de;
  border-radius: 10px;
  background: #ffffff;
`;

export const SSubsectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SSubsectionTitle = styled.h5`
  margin: 0;
  color: #2d333b;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 700;
`;

export const SArrayStack = styled.div`
  display: grid;
  gap: 12px;
`;

export const SMuted = styled.p`
  margin: 0;
  color: #7d8592;
  font-size: 13px;
  line-height: 1.5;
`;

export const SSplitFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 720px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const SCompactControl = styled.div`
  justify-self: start;
  width: min(240px, 100%);
  max-width: 100%;

  .ant-select {
    width: 100%;
  }
`;
