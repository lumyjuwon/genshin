export interface GachaState {
  contents: {
    [content: string]: {
      totalCount: number;
      pityCount: number;
      nextPity: number;
      usedFate: number;
      favoriteCount: number;
    };
  };
  fiveStarCount: number;
  fourStarCount: number;
  inventoryList: Array<string>;
  usedPrimoGem: number;
}

export enum ActionTypes {
  SetGacha = 'SetGacha',
  ClearGacha = 'ClearGacha'
}

interface SetGacha {
  type: ActionTypes.SetGacha;
  payload: GachaState;
}

interface ClearGacha {
  type: ActionTypes.ClearGacha;
}

export type GachaAction = SetGacha | ClearGacha;
