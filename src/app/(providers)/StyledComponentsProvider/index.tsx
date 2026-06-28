'use client';

import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

// import { userSettingsStore } from '@/entities/userSettings';

import { themeLight, themeDark } from '../../(theme)/styledComponentsTheme';

export const StyledComponentsProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = 'light';

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>{children}</ThemeProvider>
  );
};
