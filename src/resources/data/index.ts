export const wishesInfo = require('../data/wishesInfo.json');


export interface Character {
  [key: string]: {
    "rank": number,
    "element": string,
    "weapon": string,
    "region": string
  }
}

export interface Weapon {
  [key: string]: {
    rank: number,
    type: string
  }
}

export const characterInfo: Character = require('../data/character-info.json');
export const weaponInfo: Weapon = require('../data/weapon-info.json');