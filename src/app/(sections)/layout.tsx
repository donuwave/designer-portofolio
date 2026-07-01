'use server';

import { PropsWithChildren } from 'react';

import { PixelBlast } from '@/shared/components';

import { SContainer, SLayout } from './layout.styles';

export default async function SelectionLayout({ children }: PropsWithChildren) {
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

      <SContainer>{children}</SContainer>
    </SLayout>
  );
}
