import { NextRequest, NextResponse } from 'next/server';
import { Counter, Registry } from 'prom-client';

import { ADMIN_AUTH_COOKIE_NAME, isValidAdminSession } from '@/shared/lib/admin-auth';

const register = new Registry();
const httpRequestCounter = new Counter({
  name: 'http_requests_total',
  help: 'Общее количество HTTP-запросов',
  labelNames: ['method', 'route'],
  registers: [register],
});

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
  const isAdminLoginRoute = pathname === '/admin/login' || pathname === '/api/admin/login';
  const adminSession = request.cookies.get(ADMIN_AUTH_COOKIE_NAME)?.value;
  const isAuthorizedAdmin = isValidAdminSession(adminSession);

  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/services', request.url));
  }

  if (isAdminRoute) {
    if (isAdminLoginRoute) {
      if (pathname === '/admin/login' && isAuthorizedAdmin) {
        return NextResponse.redirect(new URL('/admin/services', request.url));
      }

      return NextResponse.next();
    }

    if (!isAuthorizedAdmin) {
      if (pathname.startsWith('/api/admin')) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('next', `${pathname}${request.nextUrl.search}`);

      return NextResponse.redirect(loginUrl);
    }
  }

  const isIncludeMetrics = !pathname.startsWith('/web/') || !pathname.startsWith('/auth/');
  if (isIncludeMetrics) {
    const route = pathname
      .replace(/[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}/g, '{GUID}')
      .replace(/(\/_next\/static\/chunks\/)[^\/]+(?=\.js)/g, '$1{CHUNK}');
    httpRequestCounter.inc({ method: request.method, route: route });
  }

  if (pathname === '/next-metrics') {
    const metrics = await register.metrics();
    return new NextResponse(metrics, {
      status: 200,
      headers: { 'Content-Type': register.contentType },
    });
  }

  const response = NextResponse.next();

  const pathIgnoreName =
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/web/') ||
    pathname.startsWith('/auth/') ||
    pathname === '/changelog.json' ||
    pathname === '/robots.txt' ||
    pathname === '/service-worker.js' ||
    pathname === '/favicon-dark.ico';

  if (pathIgnoreName) {
    return NextResponse.next();
  }

  return response;
}

export const config = {
  runtime: 'nodejs',
};
