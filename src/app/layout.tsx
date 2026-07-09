import React, { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import { WithProviders } from './(providers)';
import { AppShell } from './AppShell';

import './(theme)/global.css';

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
          <AppShell>{children}</AppShell>
        </WithProviders>
      </body>
    </html>
  );
}
