// import { createI18nMiddleware } from 'next-international/middleware';
// import { NextRequest, NextResponse } from 'next/server';


// export function middleware(request: NextRequest) {

//   const I18nMiddleware = createI18nMiddleware({
//     locales: ['en', 'th'],
//     defaultLocale: 'th',
//     urlMappingStrategy: 'rewriteDefault',
//     // resolveLocaleFromRequest: request => {
//     //   // Do your logic here to resolve the locale
//     //   return ''
//     // }
//   });

//   if (!request.nextUrl.pathname.startsWith('/th/') && !request.nextUrl.pathname.startsWith('/en/')) {

//     const acceptLanguage = request.headers.get('accept-language') || '';
//     console.log('acceptLanguage:', acceptLanguage);
//     const locale = acceptLanguage.startsWith('th') ? 'th' : 'en';
//     console.log('Current Locale from headers:', locale);
//     const url = request.nextUrl.clone();
//     url.pathname = `/${locale}${url.pathname}`;

//     // return NextResponse.rewrite(url);

//     const response = NextResponse.rewrite(url);
//     response.cookies.set('Next-Locale', 'th');
//     return response;
//   }

//   return I18nMiddleware(request);
// }

// export const config = {
//   matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
// };


// import { NextRequest, NextResponse } from 'next/server';
// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   locales: ['en', 'th'],  // Supported locales
//   defaultLocale: 'en',     // Default to English for '/'
// });

// export function middleware(request: NextRequest) {
//   const { pathname, locale } = request.nextUrl;

//   // If there's no locale in the URL (e.g., /about or /contact), redirect to the default locale
//   if (!pathname.startsWith('/en/') && !pathname.startsWith('/th/') && !pathname.endsWith('/en') && !pathname.endsWith('/th')) {
//     // If the path doesn't include a locale, rewrite it to include the default locale prefix
//     // For other paths, prepend the locale prefix
//     const newUrl = new URL(`/en${pathname}`, request.url);
//     const response = NextResponse.rewrite(newUrl);
//     response.cookies.set('NEXT_LOCALE', locale || 'th');
//     return response;  // Rewrite to /en/path or /de/path
//   }

//   // Otherwise, allow the request to proceed normally
//   return NextResponse.next();
// }

// export const config = {
//   //   matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
//   // matcher: ['/', '/(en|th)/:path*'], // Match `/`, `/en/*`, `/de/*`
// };

import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export default createMiddleware(routing);


export function middleware(request: NextRequest) {
  console.log('pathname')
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('NEXT_LOCALE') || 'th';

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'th'],
    defaultLocale
  });
  const response = handleI18nRouting(request);
  const { pathname, locale } = request.nextUrl;

  if (!pathname.startsWith('/en/') && !pathname.startsWith('/th/') && !pathname.endsWith('/en') && !pathname.endsWith('/th')) {
    const newUrl = new URL(`/th${pathname}`, request.url);
    const responseNew = NextResponse.rewrite(newUrl);
    responseNew.cookies.set('NEXT_LOCALE', locale || 'th');
    return responseNew;  // Rewrite to /en/path or /de/path
  }

  // Step 3: Alter the response (example)
  response.headers.set('NEXT_LOCALE', defaultLocale);

  return response;
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
