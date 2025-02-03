import Header from "@/components/header";
import { getDictionary } from '@/components/lang/dictionaries';
export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'th' | 'en' }>
}) {
  const lang = (await params).lang
  const dict = await getDictionary(lang) // en
  return (
    <>
    <h1>lang : {dict.home.welcome}</h1>
    <Header />
    <main>
  </main>
  </>
  );
}
