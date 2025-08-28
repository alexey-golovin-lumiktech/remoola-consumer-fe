import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED = ['/dashboard', '/contracts', '/payments', '/documents'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const access = req.cookies.get('access_token');
  const isProtected = PROTECTED.some(p => pathname.startsWith(p));

  if (isProtected && !access) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }
  if (pathname === '/login' && access) {
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ['/((?!_next|favicon.ico|assets|api/.*).*)'] };
