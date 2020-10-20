import { GachaData } from "../../pages/gacha_screen/Gacha";

interface Gacha {
  [key: string]: GachaData;
}

export const gachaInfo: Gacha = require('../data/gacha-info.json');

interface Character {
  [key: string]: {
    "rank": number,
    "element": string,
    "weapon": string,
    "region": string
  }
}
export const characterInfo: Character = require('../data/character-info.json');

interface Weapon {
  [key: string]: {
    rank: number,
    type: string
  }
}
export const weaponInfo: Weapon = require('../data/weapon-info.json');