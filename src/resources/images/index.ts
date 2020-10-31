import { weaponInfo, artifactInfo, characterInfo } from '../data';

interface ImageMap {
  [name: string]: string;
}

function appendImages(map: any, info: any, path: string): void {
  Object.keys(info).map((name: string) => {
    if (map[name] === undefined) {
      map[name] = require(`${path}/${name}.png`);
    } else {
      throw new Error(`중복되는 값이 있습니다: ${name}`);
    }
  });
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
}

const ItemImages: ImageMap = {};
appendImages(ItemImages, weaponInfo, './items/weapons');
appendImages(ItemImages, artifactInfo, './items/artifacts');

const MainScreen = {
  Gacha: require('./mainscreen/gacha.png'),
  Main: require('./mainscreen/main.jpg'),
  Paimon: require('./mainscreen/Paimon.jpg'),
  Party: require('./mainscreen/party.png')
};

const GachaImages: ImageMap = Object.assign({}, CharacterImages, ItemImages);
const GachaTypeImages: ImageMap = Object.assign({}, ElementImages, WeaponTypeImages);

export { CharacterImages, ElementImages, ItemImages, WeaponTypeImages, GachaImages, GachaTypeImages, MainScreen };
