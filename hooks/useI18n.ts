import { useLocale, useTranslations } from 'next-intl';

export function useCurrentLocale() {
  return useLocale();
}

export function useI18n() {
  return useTranslations();
}
