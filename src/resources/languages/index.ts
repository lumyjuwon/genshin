import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export enum LangCode {
  en = 'en',
  ko = 'ko'
}

const languages = {
  [LangCode.en]: {
    translation: require('./en-us.json')
  },
  [LangCode.ko]: {
    translation: require('./ko-kr.json')
  }
};

i18n.use(initReactI18next).init({
  resources: languages,
  lng: LangCode.ko,
  fallbackLng: LangCode.ko,
  debug: true
});

export enum Lang {
  Gacha = 'Gacha',
  Party = 'Party',
  Energetic_Lightning = 'Energetic_Lightning',
  Fire_Of_Passion = 'Fire_Of_Passion',
  Healing_Water = 'Healing_Water',
  Swift_Wind = 'Swift_Wind',
  Crushing_Ice = 'Crushing_Ice'
}

export function trans(key: Lang): string {
  return i18n.t(key);
}

export function changeLang(code: LangCode): void {
  i18n.changeLanguage(code);
}

export { i18n };
