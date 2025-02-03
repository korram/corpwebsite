import 'server-only'
 
const dictionaries = {
  th: () => import('@/locales/th.json').then((module) => module.default),
  en: () => import('@/locales/en.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'th' | 'en') =>
  dictionaries[locale]()