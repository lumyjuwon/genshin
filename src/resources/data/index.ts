export const wishesInfo = require('../data/wishesInfo.json');


export interface Character {
  [key: string]: {
    "rank": number,
    "element": string,
    "weapon": string,
    "region": string
  }
}

export const characterInfo: Character = require('../data/character-info.json');