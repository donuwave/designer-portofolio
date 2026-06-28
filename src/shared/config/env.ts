export const env = {
  BASE_API_URL: process.env.BASE_API_URL!,
  BASE_APP_URL: process.env.BASE_APP_URL!,
  BASE_MOCK_URL: process.env.BASE_MOCK_URL!,
  CARRIER_APP_URL: process.env.CARRIER_APP_URL!,
  CUSTOMER_APP_URL: process.env.CUSTOMER_APP_URL!,
  SESSION_NAME: process.env.SESSION_NAME!,
  FEATURED_NAME: process.env.FEATURED_NAME!,
  SESSION_PASSWORD: process.env.SESSION_PASSWORD!,
  FIREBASE_VAPID_KEY: process.env.FIREBASE_VAPID_KEY!,
  SENTRY_DSN: process.env.SENTRY_DSN!,
  SENTRY_ENABLE: Boolean(Number(process.env.SENTRY_ENABLE)),
};
