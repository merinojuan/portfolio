import es from './es.json';
import en from './en.json';

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

export const getI18N = (
  { currentLocale = 'es' }:
  { currentLocale: string | undefined }
) => {
  if (currentLocale === LANGUAGES.ENGLISH) return en;
  if (currentLocale === LANGUAGES.ENGLISH) return es;
  return es;
}

export const getDynamicI18N = (
  { currentLocale = 'es' }:
  { currentLocale: string | undefined }
): any => {
  return getI18N({ currentLocale });
}
