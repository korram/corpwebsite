// import { setStaticParamsLocale } from 'next-international/server';
import { getI18n } from '@/hooks/useI18nServer';
import Header from "@/components/header";

// Uncomment to test Static Generation on this page only
// export function generateStaticParams() {
//   return getStaticParams();
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  // const { locale } = await params;

  // Uncomment to test Static Generation
  // setStaticParamsLocale(locale);

  // const t = await getI18n();

  return (
    <div>
     <Header/>
    </div>
  );
}
