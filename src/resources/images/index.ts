import {
  weaponInfo,
  artifactInfo,
  characterInfo,
  localSpecialityItemInfo,
  weeklyBossItemInfo,
  fieldMonsterDropItemInfo,
  alchemyItemInfo,
  travelerAscensionItemInfo,
  artifactSetInfo
} from '../data';

export type ImageSrc = string | undefined;

interface ImageMap {
  [name: string]: ImageSrc;
}

function appendImages(map: any, info: any, path: string): void {
  for (const name of Object.keys(info)) {
    if (map[name] === undefined) {
      map[name] = require(`${path}/${name}.png`);
    } else {
      throw new Error(`${name} 해당 값이 없거나 중복 됩니다.`);
    }
  }
}

const CharacterImages: ImageMap = {};
appendImages(CharacterImages, characterInfo, './characters');

const ElementImages: ImageMap = {
  Anemo: require('./elements/Anemo.png'),
  Cryo: require('./elements/Cryo.png'),
  Dendro: require('./elements/Dendro.png'),
  Electro: require('./elements/Electro.png'),
  Geo: require('./elements/Geo.png'),
  Hydro: require('./elements/Hydro.png'),
  Pyro: require('./elements/Pyro.png')
};

const ItemImages: ImageMap = {};
appendImages(ItemImages, weaponInfo, './items/weapons');
appendImages(ItemImages, artifactInfo, './items/artifacts');

const ArtifactSetImages: ImageMap = {};
appendImages(ArtifactSetImages, artifactSetInfo, './items/artifact-set');

const GemImages: ImageMap = {
  Intertwined: require('./items/gem/Intertwined Fate.png'),
  Acquaint: require('./items/gem/Acquaint Fate.png')
};

const MainScreen = {
  Gacha: require('./mainscreen/gacha.png'),
  Main: require('./mainscreen/main.jpg'),
  Paimon: require('./mainscreen/Paimon.jpg'),
  Party: require('./mainscreen/party.png')
};

const CategoryImages: ImageMap = {
  Character: require('./categories/Character.png'),
  Weapon: require('./categories/Weapon.png'),
  Bow: require('./categories/Weapon.png'),
  Catalyst: require('./categories/Weapon.png'),
  Polearm: require('./categories/Weapon.png'),
  Claymore: require('./categories/Weapon.png'),
  Sword: require('./categories/Weapon.png'),
  Flower: require('./categories/Flower.png'),
  Feather: require('./categories/Feather.png'),
  HourGlass: require('./categories/HourGlass.png'),
  HolyGrail: require('./categories/HolyGrail.png'),
  Crown: require('./categories/Crown.png')
};

const GachaImages: ImageMap = Object.assign({}, CharacterImages, ItemImages);

const MapImages: ImageMap = {
  Map: require('./map/map.png')
};

const DailySetImages: ImageMap = {
  Freedom: require('./items/daily-set/Freedom.png'),
  Resistance: require('./items/daily-set/Resistance.png'),
  Ballad: require('./items/daily-set/Ballad.png'),
  Prosperity: require('./items/daily-set/Prosperity.png'),
  Diligence: require('./items/daily-set/Diligence.png'),
  Gold: require('./items/daily-set/Gold.png'),
  Decarabian: require('./items/daily-set/Decarabian.png'),
  Boreal_Wolf: require('./items/daily-set/Boreal_Wolf.png'),
  Dandelion_Gladiator: require('./items/daily-set/Dandelion_Gladiator.png'),
  Guyun: require('./items/daily-set/Guyun.png'),
  Elixir: require('./items/daily-set/Elixir.png'),
  Aerosiderite: require('./items/daily-set/Aerosiderite.png')
};

const TravelerAscensionItemImages: ImageMap = {};
appendImages(TravelerAscensionItemImages, travelerAscensionItemInfo, './items/traveler-ascension');

const WeeklyBossItemImages: ImageMap = {};
appendImages(WeeklyBossItemImages, weeklyBossItemInfo, './items/weekly-boss');

const FieldMonsterDropItemImages: ImageMap = {};
appendImages(FieldMonsterDropItemImages, fieldMonsterDropItemInfo, './items/field-monster-drop');

const LocalSpecialityItemImages: ImageMap = {};
appendImages(LocalSpecialityItemImages, localSpecialityItemInfo, './items/local-speciality');

const CharacterAscentionItemImages = Object.assign({}, FieldMonsterDropItemImages, LocalSpecialityItemImages, TravelerAscensionItemImages);
appendImages(CharacterAscentionItemImages, alchemyItemInfo, './items/character-ascension');

const CharacterTalentItemImages = Object.assign({}, FieldMonsterDropItemImages, WeeklyBossItemImages, DailySetImages);
appendImages(CharacterTalentItemImages, alchemyItemInfo, './items/character-ascension');

const TierImages: ImageMap = {
  T0: require('./tier/T0.png'),
  T1: require('./tier/T1.png'),
  T2: require('./tier/T2.png'),
  T3: require('./tier/T3.png')
};

export {
  CharacterImages,
  ElementImages,
  ItemImages,
  GachaImages,
  MainScreen,
  GemImages,
  CategoryImages,
  MapImages,
  DailySetImages,
  WeeklyBossItemImages,
  FieldMonsterDropItemImages,
  LocalSpecialityItemImages,
  CharacterAscentionItemImages,
  CharacterTalentItemImages,
  ArtifactSetImages,
  TierImages
};
