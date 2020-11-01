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

export const gachaInfo: Gacha = require('../data/gacha-info.json');

interface Character {
  [name: string]: {
    rank: Rank;
    element: CharacterElementType;
    weapon: WeaponName;
    region: CharacterRegion;
  };
}
export const characterInfo: Character = require('../data/character-info.json');

interface Weapon {
  [name: string]: {
    rank: Rank;
    type: WeaponType;
  };
}
export const weaponInfo: Weapon = require('../data/weapon-info.json');

interface Artifact {
  [name: string]: {
    rank: Rank;
    type: ArtifactType;
    set: string;
  };
}
export const artifactInfo: Artifact = require('../data/artifact-info.json');

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
