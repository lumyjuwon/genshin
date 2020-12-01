type Rank = number;

export type WeaponName = string;
export type WeaponType = 'Bow' | 'Catalyst' | 'Claymore' | 'Polearm' | 'Sword';

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
const weaponInfo: Weapon = require('./weapon-info.json');

export { weaponInfo };
