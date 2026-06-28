import { FC, PropsWithChildren } from 'react';

import { RootStyleRegistry } from './RootStyleRegistry';
import { StyledComponentsRegistry } from './StyledComponentsRegistry';
import { StyledComponentsProvider } from './StyledComponentsProvider';
import { ThemeProvider } from './ThemeProvider';

export const WithProviders: FC<PropsWithChildren> = ({ children }) => (
  <StyledComponentsProvider>
    <ThemeProvider>
      <RootStyleRegistry>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </RootStyleRegistry>
    </ThemeProvider>
  </StyledComponentsProvider>
);
