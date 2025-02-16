import localFont from 'next/font/local'

const SourceSansPro = localFont({
  src: [
    {
      path: 'fonts/SourceSansPro/SourceSansPro-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: 'fonts/SourceSansPro/SourceSansPro-Semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: 'fonts/SourceSansPro/SourceSansPro-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-source-sans'
});

const DBHelvethaicaX = localFont({
  src: [
    {
      path: 'fonts/DBHelvethaicaX/DB Helvethaica X Thin v3.2.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: 'fonts/DBHelvethaicaX/DB Helvethaica X Li v3.2.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/DBHelvethaicaX/DB Helvethaica X v3.2.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/DBHelvethaicaX/DB Helvethaica X Med v3.2.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/DBHelvethaicaX/DB Helvethaica X Bd v3.2.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-dbhelvethaica'

});

const Publico = localFont({
  src: [
    {
      path: 'fonts/Publico/Publico-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-publico'
});

module.exports = { SourceSansPro, DBHelvethaicaX, Publico };