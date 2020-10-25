import { GachaData } from '../../pages/gacha/Gacha';

interface Gacha {
  [key: string]: GachaData;
}

export const gachaInfo: Gacha = require('../data/gacha-info.json');

interface Character {
  [name: string]: {
    rank: number;
    element: string;
    weapon: string;
    region: string;
  };
}
export const characterInfo: Character = require('../data/character-info.json');

interface Weapon {
  [name: string]: {
    rank: number;
    type: 'bow' | 'catalyst' | 'claymore' | 'polearm' | 'sword';
  };
}
export const weaponInfo: Weapon = require('../data/weapon-info.json');

interface Artifact {
  [name: string]: {
    rank: number;
    type: string;
  };
}
export const artifactInfo: Artifact = require('../data/artifact-info.json');
