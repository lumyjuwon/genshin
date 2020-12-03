import { KeyLang } from 'src/resources/languages';

export function changeItemNameToKeyLang(item: string): KeyLang {
  return item.replace(/\s|-/g, '_').replace(/'|\(|\)/g, '') as KeyLang;
}
