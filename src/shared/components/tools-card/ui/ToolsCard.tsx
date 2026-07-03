import React, { FC, ReactNode } from 'react';
import { SIcons, STitle, SToolsCard } from './toolsCard.styles';

interface ToolsCardProps {
  title: string;
  icons: ReactNode[];
}

export const ToolsCard: FC<ToolsCardProps> = ({ title, icons }) => {
  return (
    <SToolsCard>
      <STitle>{title}</STitle>
      <SIcons>{icons.map((icon) => icon)}</SIcons>
    </SToolsCard>
  );
};
