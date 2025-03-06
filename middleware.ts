import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest, NextResponse } from 'next/server';


export function middleware(request: NextRequest) {

  const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'th'],
    defaultLocale: 'th',
  });

  if (!request.nextUrl.pathname.startsWith('/th/') && !request.nextUrl.pathname.startsWith('/en/')) {

    const acceptLanguage = request.headers.get('accept-language') || '';
    console.log('acceptLanguage:', acceptLanguage);
    const locale = acceptLanguage.startsWith('th') ? 'th' : 'en';
    console.log('Current Locale from headers:', locale);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${url.pathname}`;

    // return NextResponse.rewrite(url);

    const response = NextResponse.rewrite(url);
    response.cookies.set('Next-Locale', 'th', {
      path: '/', // ตั้งค่าคุกกี้ให้ใช้ได้ทั่วทั้งเว็บไซต์
      maxAge: 60 * 60 * 24 * 365, // ตั้งคุกกี้ให้หมดอายุใน 1 ปี
      httpOnly: true, // ป้องกันไม่ให้เข้าถึง cookie จาก JavaScript
      secure: process.env.NODE_ENV === 'production', // ใช้ secure flag ในการตั้งค่าคุกกี้ใน production
    });
    return response;
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
