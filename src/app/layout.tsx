import React, { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import { WithProviders } from './(providers)';

import './(theme)/global.css';
import { SContainer, SLayout } from '@/app/layout.styles';
import { PixelBlast } from '@/shared/components';
import { Header } from '@/widgets/header';

const mono = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jet_brains_Mono',
});

export const metadata: Metadata = {
  title: '',
  description: '',
  robots: {
    index: false,
    notranslate: true,
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.ico',
        href: '/favicon-light.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.ico',
        href: '/favicon-dark.ico',
      },
    ],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body className={`${mono.variable} font-sans`}>
        <WithProviders>
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
        </WithProviders>
      </body>
    </html>
  );
}
