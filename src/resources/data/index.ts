import { GachaData } from '../../pages/gacha/Gacha';

export type Rank = number;

export type CharacterName = string;
export type CharacterRegion = string;
export type CharacterElementType = 'Cyro' | 'Pyro' | 'Anemo' | 'Hydro' | 'Adaptive' | 'Geo';

export type WeaponName = string;
export type WeaponType = 'Bow' | 'Catalyst' | 'Claymore' | 'Polearm' | 'Sword';

export type ArtifactName = string;
export type ArtifactType = 'Flower' | 'Feather' | 'HourGlass' | 'HolyGrail' | 'Crown';

interface Gacha {
  [key: string]: GachaData;
}
const gachaInfo: Gacha = require('../data/gacha-info.json');

interface Character {
  [name: string]: {
    rank: Rank;
    element: CharacterElementType;
    weapon: WeaponType;
    region: CharacterRegion;
    stats: {
      Level: string;
      HP: string;
      ATK: string;
      DEF: string;
      Additional: string;
    };
    ascension: {
      items: Array<string>;
      Max_40: {
        [itemName: string]: number;
      };
      Max_50: {
        [itemName: string]: number;
      };
      Max_60: {
        [itemName: string]: number;
      };
      Max_70: {
        [itemName: string]: number;
      };
      Max_80: {
        [itemName: string]: number;
      };
      Max_90: {
        [itemName: string]: number;
      };
    };
    talent: {
      book: string;
      boss: string;
      drop: string;
    };
  };
}
const characterInfo: Character = require('../data/character-info.json');

interface Weapon {
  [name: string]: {
    rank: Rank;
    type: WeaponType;
    stats: {
      Level: string;
      ATK: string;
      Additional: string;
    };
  };
}
const weaponInfo: Weapon = require('../data/weapon-info.json');

interface Artifact {
  [name: string]: {
    rank: Rank;
    type: ArtifactType;
    set: string;
  };
}
const artifactInfo: Artifact = require('../data/artifact-info.json');

interface ArtifactSet {
  [name: string]: {
    rank: Rank;
    Flower: ArtifactName;
    Feather: ArtifactName;
    HourGlass: ArtifactName;
    HolyGrail: ArtifactName;
    Crown: ArtifactName;
    TwoPieceSet: string;
    FourPieceSet: string;
  };
}

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
const characterTalentItemInfo: CharacterTalentItem = require('../data/character-talent-item-info.json');

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
const weaponAscesionItemInfo: WeaponAscesionItem = require('../data/weapon-ascension-item-info.json');

interface ServerTime {
  [timezone: string]: number;
}
const serverTimeInfo: ServerTime = require('../data/server-time.json');

interface LocalSpcialityItem {
  [item: string]: {
    region: string;
    rank: number;
  };
}
const localSpecialityItemInfo: LocalSpcialityItem = require('../data/local-speciality-item-info.json');

interface AlchemyItem {
  [name: string]: {
    rank: number;
    source: string;
  };
}
const alchemyItemInfo: AlchemyItem = require('../data/alchemy-item-info.json');

interface WeeklyBossItem {
  [name: string]: {
    rank: number;
    obtain: Array<string>;
  };
}
const weeklyBossItemInfo: WeeklyBossItem = require('../data/weekly-boss-item-info.json');

interface FieldMonsterDropItem {
  [name: string]: {
    monster: Array<string>;
    rank: number;
  };
}
const fieldMonsterDropItemInfo: FieldMonsterDropItem = require('../data/field-monster-drop-item.json');

export {
  gachaInfo,
  characterInfo,
  weaponInfo,
  artifactInfo,
  characterTalentItemInfo,
  weaponAscesionItemInfo,
  serverTimeInfo,
  localSpecialityItemInfo,
  alchemyItemInfo,
  weeklyBossItemInfo,
  fieldMonsterDropItemInfo
};
