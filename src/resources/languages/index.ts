import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Detactor from 'i18next-browser-languagedetector';

import { Lang } from './lang';

enum LangCode {
  en = 'en',
  ko = 'ko'
}

export type KeyLang = keyof typeof Lang;

const languages = {
  [LangCode.en]: {
    translation: require('./en-us.json')
  },
  [LangCode.ko]: {
    translation: require('./ko-kr.json')
  }
};

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
};
const detactor = new Detactor();
detactor.init(options);

i18n.use(detactor).use(initReactI18next).init({
  resources: languages,
  fallbackLng: LangCode.en
});

function getCurrentLanguage(): LangCode {
  return i18n.language as LangCode;
}

function trans(key: Lang): string {
  return i18n.t(key);
}

function changeLang(code: LangCode): void {
  i18n.changeLanguage(code);
}

export { i18n, Lang, LangCode, getCurrentLanguage, trans, changeLang };
