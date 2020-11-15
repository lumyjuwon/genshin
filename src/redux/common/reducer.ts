import { ActionTypes, CommonAction, CommonState } from './types';

const initialState: CommonState = {
  region: ''
};

export function commonReducer(state = initialState, action: CommonAction) {
  switch (action.type) {
    case ActionTypes.SetRegion:
      return {
        ...state,
        region: action.payload
      };
    default:
      return state;
  }
}
