import Header from "../../components/layouts/Header";
import { useI18n } from '@/hooks/useI18n';
export default  function Home({ params }: { params: Promise<{ locale: string }> }) {



  const t =  useI18n();
  return (
    <div>
     <Header/>
     <div className="p-6">fds
    <h1>H1: {t('hello')}</h1>
    <h2>H2: {t('hello')}</h2>
    <h3>H3: {t('hello')}</h3>
    <h4>H4: {t('hello')}</h4>
    <h5>HellH5o: {t('hello')}</h5><br/><br/>

    <p className="lead-paragraph">Lead paragraph: {t('hello')}</p>
    <p>paragraph: {t('hello')}</p>
    <p className="small-paragraph">Small paragraph: {t('hello')}</p><br/><br/>


    <span className="display2">Display2 : {t('hello')}</span><br/>
    <span className="display3">Display3 : {t('hello')}</span><br/>
    <span className="display4">Display4 : {t('hello')}</span><br/>
    <span className="display6">Display6 : {t('hello')}</span><br/>
</div>
    </div>
  );
}
