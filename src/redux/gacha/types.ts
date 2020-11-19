export interface GachaState {
  characterEventWish: {
    count: number;
    nextPity: number;
  };
  weaponEventWish: {
    count: number;
    nextPity: number;
  };
  standardWish: {
    count: number;
    nextPity: number;
  };
  noviceWishes: {
    count: number;
    nextPity: number;
  };
  fiveStarCount: number;
  fourStarCount: number;
  itemCount: number;
  usedPrimoGem: number;
}

export enum ActionTypes {
  SetGacha = 'SetGacha'
}

interface SetGacha {
  type: ActionTypes.SetGacha;
  payload: GachaState;
}

export type GachaAction = SetGacha;
