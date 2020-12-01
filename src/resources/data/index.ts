import { GachaData } from '../../pages/gacha/Gacha';

export { artifactInfo, artifactSetInfo } from './artifact/artifact';
export type { ArtifactName, ArtifactType } from './artifact/artifact';

export {
  alchemyItemInfo,
  weeklyBossItemInfo,
  fieldMonsterDropItemInfo,
  travelerAscensionItemInfo,
  localSpecialityItemInfo,
  weaponAscesionItemInfo,
  characterTalentItemInfo
} from './item/item';
export type { WeaponAscesionItem, CharacterTalentItem, AscensionMaterialName } from './item/item';

export { characterInfo } from './character-info';
export type { CharacterElementType, CharacterName, CharacterRegion, Level } from './character-info';

export { weaponInfo } from './weapon-info';
export type { WeaponName, WeaponType } from './weapon-info';

export type Rank = number;

interface Gacha {
  [key: string]: GachaData;
}
const gachaInfo: Gacha = require('../data/gacha-info.json');

interface ServerTime {
  [timezone: string]: number;
}
const serverTimeInfo: ServerTime = require('../data/server-time.json');

export { gachaInfo, serverTimeInfo };
