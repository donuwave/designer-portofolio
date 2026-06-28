import { withSentryConfig } from '@sentry/nextjs';
import withBundleAnalyzer from '@next/bundle-analyzer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withBaseUrl = (baseUrl, routePath) => {
  if (!baseUrl) {
    return null;
  }

  return `${baseUrl.replace(/\/$/, '')}${routePath}`;
};

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  outputFileTracingRoot: __dirname,
  compiler: {
    styledComponents: true
  },
  productionBrowserSourceMaps: false,
  eslint: { ignoreDuringBuilds: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['msw/node'] = false;
      config.resolve.alias['prom-client'] = false;
    }
    return config;
  },
  experimental: {
    optimizePackageImports: [
      'antd',
      'react-virtuoso',
      '@mdxeditor/editor',
      '@virtuoso.dev/message-list',
      "dayjs",
      "lodash.debounce",
    ]
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    BASE_APP_URL: process.env.BASE_APP_URL,
    BASE_MOCK_URL: process.env.BASE_MOCK_URL,
    CARRIER_APP_URL: process.env.CARRIER_APP_URL,
    CUSTOMER_APP_URL: process.env.CUSTOMER_APP_URL,
    SESSION_PASSWORD: process.env.SESSION_PASSWORD,
    SESSION_NAME: process.env.SESSION_NAME,
    FEATURED_NAME: process.env.FEATURED_NAME,
    FIREBASE_VAPID_KEY: process.env.FIREBASE_VAPID_KEY,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ENABLE: process.env.SENTRY_ENABLE
  },
  transpilePackages: [
    'rc-util',
    '@ant-design',
    'kitchen-flow-editor',
    '@ant-design/pro-editor',
    'zustand',
    'leva',
    'antd',
    'rc-pagination',
    'rc-picker'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/auth/web/:path*',
        destination: withBaseUrl(process.env.BASE_APP_URL, '/auth/web/:path*')
      },
      {
        source: '/mock/:path*',
        destination: withBaseUrl(process.env.BASE_MOCK_URL, '/mock/:path*')
      },
      {
        source: '/web/:path*',
        destination: withBaseUrl(process.env.BASE_APP_URL, '/web/:path*')
      },
      {
        source: '/api/:path*',
        destination: withBaseUrl(process.env.BASE_APP_URL, '/api/:path*')
      }
    ].filter(({ destination }) => Boolean(destination));
  }
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

export default withSentryConfig(
  bundleAnalyzer(nextConfig),
  {
    telemetry: false,
    sourcemaps: { deleteSourcemapsAfterUpload: true }
  }
);
