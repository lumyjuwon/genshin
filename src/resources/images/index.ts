import { weaponInfo, artifactInfo, characterInfo } from '../data';

export type ImageSrc = string | null;

interface ImageMap {
  [name: string]: ImageSrc;
}

function appendImages(map: any, info: any, path: string): void {
  for (const name of Object.keys(info)) {
    if (map[name] === undefined) {
      map[name] = require(`${path}/${name}.png`);
    } else {
      throw new Error(`중복되는 값이 있습니다: ${name}`);
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

const WeaponTypeImages: ImageMap = {
  Bow: require('./items/weapons/Bow.png'),
  Catalyst: require('./items/weapons/Catalyst.png'),
  Claymore: require('./items/weapons/Claymore.png'),
  Polearm: require('./items/weapons/Polearm.png'),
  Sword: require('./items/weapons/Sword.png')
};

const ItemImages: ImageMap = {};
appendImages(ItemImages, weaponInfo, './items/weapons');
appendImages(ItemImages, artifactInfo, './items/artifacts');

const ArtifactTypeImages: ImageMap = {
  Flower: require('./items/artifacts/Flower.png'),
  Feather: require('./items/artifacts/Feather.png'),
  HourGlass: require('./items/artifacts/HourGlass.png'),
  HolyGrail: require('./items/artifacts/HolyGrail.png'),
  Crown: require('./items/artifacts/Crown.png')
};

const MainScreen = {
  Gacha: require('./mainscreen/gacha.png'),
  Main: require('./mainscreen/main.jpg'),
  Paimon: require('./mainscreen/Paimon.jpg'),
  Party: require('./mainscreen/party.png')
};

const ItemTypeImages: ImageMap = Object.assign({}, ArtifactTypeImages, WeaponTypeImages);
const GachaImages: ImageMap = Object.assign({}, CharacterImages, ItemImages);
const GachaTypeImages: ImageMap = Object.assign({}, ElementImages, WeaponTypeImages);

export { ItemTypeImages, CharacterImages, ElementImages, ItemImages, WeaponTypeImages, GachaImages, GachaTypeImages, MainScreen };
