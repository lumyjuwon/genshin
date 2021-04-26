export type AscensionMaterialName = string;

interface LocalSpcialityItem {
  [item: string]: {
    region: string;
    rank: number;
    usage: Array<string>;
  };
}
const localSpecialityItemInfo: LocalSpcialityItem = require('./local-speciality-item-info.json');

interface AlchemyItem {
  [name: string]: {
    rank: number;
    source: string;
  };
}
const alchemyItemInfo: AlchemyItem = require('./alchemy-item-info.json');

interface WeeklyBossItem {
  [name: string]: {
    rank: number;
    obtain: Array<string>;
    usage: Array<string>;
  };
}
const weeklyBossItemInfo: WeeklyBossItem = require('./weekly-boss-item-info.json');

interface FieldMonsterDropItem {
  [name: string]: {
    monster: Array<string>;
    rank: number;
    usage: Array<string>;
  };
}
const fieldMonsterDropItemInfo: FieldMonsterDropItem = require('./field-monster-drop-item.json');

interface TravelerAscensionItem {
  [name: string]: {
    rank: number;
    obtain: Array<string>;
  };
}
const travelerAscensionItemInfo: TravelerAscensionItem = require('./traveler-ascension-item.json');

export interface CharacterTalentItem {
  [setName: string]: {
    day: Array<string>;
    items: {
      [itemName: string]: {
        rank: number;
      };
    };
  };
}
const characterTalentItemInfo: CharacterTalentItem = require('./character-talent-item-info.json');

export interface WeaponAscesionItem {
  [setName: string]: {
    day: Array<string>;
    items: {
      [itemName: string]: {
        rank: number;
      };
    };
  };
}
const weaponAscesionItemInfo: WeaponAscesionItem = require('./weapon-ascension-item-info.json');

export {
  localSpecialityItemInfo,
  alchemyItemInfo,
  weeklyBossItemInfo,
  fieldMonsterDropItemInfo,
  travelerAscensionItemInfo,
  characterTalentItemInfo,
  weaponAscesionItemInfo
};
