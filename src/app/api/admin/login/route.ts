import { NextRequest, NextResponse } from 'next/server';

import {
  ADMIN_AUTH_COOKIE_NAME,
  getAdminSessionToken,
  isAdminAuthConfigured,
  validateAdminPassword,
} from '@/shared/lib/admin-auth';

const createUnauthorizedResponse = (message: string, status = 401) =>
  NextResponse.json(
    {
      message,
    },
    { status }
  );

export async function POST(request: NextRequest) {
  if (!isAdminAuthConfigured()) {
    return createUnauthorizedResponse('Admin auth is not configured', 500);
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password?.trim() ?? '';

  if (!validateAdminPassword(password)) {
    return createUnauthorizedResponse('Неверный пароль');
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set({
    name: ADMIN_AUTH_COOKIE_NAME,
    value: getAdminSessionToken(),
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12,
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });

  response.cookies.set({
    name: ADMIN_AUTH_COOKIE_NAME,
    value: '',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: new Date(0),
  });

  return response;
}
