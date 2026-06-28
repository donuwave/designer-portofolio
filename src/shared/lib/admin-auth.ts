import { createHmac, timingSafeEqual } from 'node:crypto';

export const ADMIN_AUTH_COOKIE_NAME = 'admin_session';

const getAdminPassword = () => process.env.ADMIN_PASSWORD ?? '';

const getAdminSessionSecret = () => process.env.ADMIN_SESSION_SECRET ?? process.env.SESSION_PASSWORD ?? '';

const toBuffer = (value: string) => Buffer.from(value);

const isSameValue = (left: string, right: string) => {
  const leftBuffer = toBuffer(left);
  const rightBuffer = toBuffer(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
};

export const isAdminAuthConfigured = () => getAdminPassword().length > 0 && getAdminSessionSecret().length > 0;

export const validateAdminPassword = (password: string) => {
  const adminPassword = getAdminPassword();

  return adminPassword.length > 0 && isSameValue(password, adminPassword);
};

export const getAdminSessionToken = () => {
  const secret = getAdminSessionSecret();

  if (!secret) {
    return '';
  }

  return createHmac('sha256', secret).update('designer-portfolio-admin-session').digest('hex');
};

export const isValidAdminSession = (token?: string | null) => {
  const sessionToken = getAdminSessionToken();

  return !!token && !!sessionToken && isSameValue(token, sessionToken);
};
