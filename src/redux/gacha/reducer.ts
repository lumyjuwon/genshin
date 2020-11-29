import { ActionTypes, GachaState, GachaAction } from './types';

export const initialGachaState: GachaState = {
  contents: {
    Character_Event_Wish: {
      totalCount: 0,
      pityCount: 0,
      nextPity: 0,
      usedFate: 0
    },
    Weapon_Event_Wish: {
      totalCount: 0,
      pityCount: 0,
      nextPity: 0,
      usedFate: 0
    },
    Standard_Wish: {
      totalCount: 0,
      pityCount: 0,
      nextPity: 0,
      usedFate: 0
    },
    Novice_Wishes: {
      totalCount: 0,
      pityCount: 0,
      nextPity: 0,
      usedFate: 0
    }
  },
  fiveStarCount: 0,
  fourStarCount: 0,
  inventoryList: [],
  usedPrimoGem: 0
};

export function gachaReducer(state = initialGachaState, action: GachaAction): GachaState {
  switch (action.type) {
    case ActionTypes.SetGacha:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.ClearGacha:
      return {
        ...initialGachaState
      };
    default:
      return state;
  }
}
