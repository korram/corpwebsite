import Header from "@/components/layouts/header";
// import { getDictionary } from '@/components/lang/dictionaries';
import { getI18n } from '@/hooks/useI18nServer';
export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'th' | 'en' }>
}) {
  // const lang = (await params).lang || 'th';
  // const dict = await getDictionary(lang) // en
  const t = await getI18n();
  return (
    <>
    {/* <h1>lang : {dict.home.welcome}</h1> */}
    <p>Hello: {t('hello')}</p>
    <Header />
    <main>
  </main>
  </>
  );
}
