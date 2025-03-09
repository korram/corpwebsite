import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams, useSearchParams } from 'next/navigation';

export function useChangeLocale() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
    const searchParams = useSearchParams(); // Get current query params
  const query = Object.fromEntries(searchParams.entries());

  function changeLocale(locale: string) {
    console.log('locale', locale);
    console.log('pathname', pathname);
    startTransition(() => {
      router.replace(
        { pathname, params, query  },
        { locale }
      );
    });
  }

  return { changeLocale, isPending };
}


// import { useTransition } from 'react';
// import { usePathname, useRouter } from '@/i18n/navigation';

// export function useChangeLocale() {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const pathname = usePathname();
//   const params = useParams();
//   const searchParams = useSearchParams(); // Get current query params

//   function changeLocale(locale: string) {
//     console.log('locale', locale);
//     console.log('pathname', pathname);

//     // Convert searchParams to an object and modify it
//     const newSearchParams = new URLSearchParams(searchParams.toString());
//     newSearchParams.set('id', '9'); // Modify or add `id=9`

//     startTransition(() => {
//       router.replace(
//         { pathname, params, query: newSearchParams.toString() }, // Include query parameters
//         { locale }
//       );
//     });
//   }

//   return { changeLocale, isPending };
// }
