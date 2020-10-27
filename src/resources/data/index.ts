import { GachaData } from '../../pages/gacha/Gacha';

export type CharacterElementType = 'Cyro' | 'Pyro' | 'Anemo' | 'Hydro' | 'Adaptive' | 'Geo';
export type WeaponType = 'Bow' | 'Catalyst' | 'Claymore' | 'Polearm' | 'Sword';
export type ArtifactType = 'Flower' | 'Feather' | 'Hourglass' | 'HolyGrail' | 'Crown';

interface Gacha {
  [key: string]: GachaData;
}

export const gachaInfo: Gacha = require('../data/gacha-info.json');

interface Character {
  [name: string]: {
    rank: number;
    element: CharacterElementType;
    weapon: string;
    region: string;
  };
}
export const characterInfo: Character = require('../data/character-info.json');

interface Weapon {
  [name: string]: {
    rank: number;
    type: WeaponType;
  };
}
export const weaponInfo: Weapon = require('../data/weapon-info.json');

interface Artifact {
  [name: string]: {
    rank: number;
    type: ArtifactType;
  };
}
export const artifactInfo: Artifact = require('../data/artifact-info.json');
