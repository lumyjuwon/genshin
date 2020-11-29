export interface GachaState {
  contents: {
    [content: string]: {
      totalCount: number;
      nextPity: number;
    };
  };
  fiveStarCount: number;
  fourStarCount: number;
  inventoryList: Array<string>;
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
