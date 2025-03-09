// export const dynamic = "force-dynamic"; // ทำให้ไม่ถูก prerender
// export default function NotFound() {
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//       <p>The page you are looking for does not exist.</p>
//     </div>
//   );
// }
'use client';

import Error from 'next/error';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />;
      </body>
    </html>
  );
}
