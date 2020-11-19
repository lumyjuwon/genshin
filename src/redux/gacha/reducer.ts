import { ActionTypes, GachaState, GachaAction } from './types';

const initialState: GachaState = {
  characterEventWish: {
    count: 0,
    nextPity: 0
  },
  weaponEventWish: {
    count: 0,
    nextPity: 0
  },
  standardWish: {
    count: 0,
    nextPity: 0
  },
  noviceWishes: {
    count: 0,
    nextPity: 0
  },
  fiveStarCount: 0,
  fourStarCount: 0,
  itemCount: 0,
  usedPrimoGem: 0
};

export function gachaReducer(state = initialState, action: GachaAction): GachaState {
  switch (action.type) {
    case ActionTypes.SetGacha:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
