'use client';

import React, { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

import { PixelBlast } from '@/shared/components';
import { Header } from '@/widgets/header';

import { SContainer, SLayout } from './layout.styles';

const isAdminRoute = (pathname: string | null) =>
  pathname === '/admin' || pathname?.startsWith('/admin/') || false;

export const AppShell = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  if (isAdminRoute(pathname)) {
    return children;
  }

  return (
    <SLayout>
      <PixelBlast
        variant="square"
        pixelSize={3}
        color="white"
        patternScale={6}
        patternDensity={1}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.5}
        edgeFade={0.25}
        transparent
      />

      <Header />

      <SContainer>{children}</SContainer>
    </SLayout>
  );
};
