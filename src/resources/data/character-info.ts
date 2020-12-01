import { WeaponType } from './weapon-info';

type Rank = number;

export type CharacterName = string;
export type CharacterRegion = string;
export type CharacterElementType = 'Cyro' | 'Pyro' | 'Anemo' | 'Hydro' | 'Adaptive' | 'Geo';

enum AscensionLevel {
  Max_20 = 'Max_20',
  Max_40 = 'Max_40',
  Max_50 = 'Max_50',
  Max_60 = 'Max_60',
  Max_70 = 'Max_70',
  Max_80 = 'Max_80',
  Max_90 = 'Max_90'
}
export type Level = keyof typeof AscensionLevel;

interface Character {
  [name: string]: {
    rank: Rank;
    element: CharacterElementType;
    weapon: WeaponType;
    region: CharacterRegion;
    stats: {
      [key in AscensionLevel]: {
        Level: string;
        HP: string;
        ATK: string;
        DEF: string;
        Additional: string;
      };
    };
    recommendedParty?: {
      [list: string]: {
        party: Array<string>;
        alter?: {
          [name: string]: Array<string>;
        };
      };
    };
    recommendedEquip: {
      artifact: {
        [list: string]: {
          name: Array<string>;
          set: number;
        };
      };
      weapon: Array<string>;
    };
    ascensionMaterials: {
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
    talentMaterials: {
      book: string;
      boss: string;
      drop: string;
    };
    position: Array<string>;
    tier: {
      [position: string]: string;
    };
  };
}
const characterInfo: Character = require('./character-info.json');

export { characterInfo };
