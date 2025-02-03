import { NextRequest, NextResponse } from "next/server";

const locales: string[] = ['th-TH','en-US']; // กำหนดรายการภาษา

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  return acceptLanguage?.split(',')[0] || 'th';
}

export function middleware(request: NextRequest): NextResponse | void {
  const { pathname } = request.nextUrl;
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  console.log(`pathnameHasLocale : ${pathnameHasLocale}`)

  if (pathnameHasLocale) return; 

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl); 
}

export const config = {
  matcher: [
    '/((?!_next).*)', // ไม่ให้ middleware ทำงานกับ path ที่เริ่มต้นด้วย '_next'
    // Optional: สามารถใช้ '/' เพื่อทำงานแค่กับหน้าแรก
    // '/'
  ],
};
