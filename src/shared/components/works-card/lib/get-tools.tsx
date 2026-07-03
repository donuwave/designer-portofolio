import {
  AbodeAppsIcon,
  NotionIcon,
  Cinema4DIcon,
  FigmaIcon,
  GilabIcon,
  AfterEffectsIcon,
  GeminiIcon,
  GptIcon,
} from '@/shared/assets';
import React from 'react';

export const getTools = () => {
  return [
    { id: 1, title: 'Дизайн', icons: [<FigmaIcon />, <AbodeAppsIcon />] },
    { id: 2, title: 'Ведение проекта', icons: [<GilabIcon />, <NotionIcon />] },
    { id: 3, title: '3D и анимация', icons: [<Cinema4DIcon />, <AfterEffectsIcon />] },
    { id: 4, title: 'ИИ инструменты', icons: [<GeminiIcon />, <GptIcon />] },
  ];
};
