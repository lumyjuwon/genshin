import { weaponInfo, artifactInfo, characterInfo } from '../data';

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

export { CharacterImages, ElementImages, ItemImages, GachaImages, MainScreen, GemImages, CategoryImages, MapImages };
