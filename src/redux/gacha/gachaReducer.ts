import { CLICK_GACHA_BUTTON, RESET_ALL } from './gachaActions';

export interface State {
  totalCount: number;
  fiveStarCount: number;
  fourStarCount: number;
  nextPity: number;
  usedPrimoGem: number;
  gachaContent: string;
  gachaInventoryList: Array<string>;
  gachaExecutionResult: Array<string>;
}

const initialState: State = {
  totalCount: 0,
  fiveStarCount: 0,
  fourStarCount: 0,
  nextPity: 0,
  usedPrimoGem: 0,
  gachaContent: '',
  gachaInventoryList: [],
  gachaExecutionResult: []
};

export function gachaReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case RESET_ALL:
      return {
        ...state,
        ...initialState
      };
    case CLICK_GACHA_BUTTON:
      return {
        ...state
        // totalCount: +10,
        // fiveStarCount: ,
        // fourStarCount: ,
        // nextPity: ,
        // usedPrimoGem: state.totalCount * 160,
        // gachaContent: ,
        // gachaInventoryList: ,
        // gachaExecutionResult ,
      };
    // case CHANGE_WISH_CONTENT:
    //   return {
    //     ...state
    //     // gachaContent: action.gacha
    //     // Change ref
    //   };
    default:
      return state;
  }
}
