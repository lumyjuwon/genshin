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
  // 임시로 'Character Event Wish'사용, 바꿀예정
  gachaContent: 'Character Event Wish',
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
        ...state,
        totalCount: state.totalCount + 10
      };
  }
}
