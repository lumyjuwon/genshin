import { ActionTypes, CommonAction, CommonState, Continent } from './types';

export const initialCommonState: CommonState = {
  server: Continent.Asia
};

export function commonReducer(state = initialCommonState, action: CommonAction) {
  switch (action.type) {
    case ActionTypes.SetServer:
      return {
        ...state,
        server: action.payload
      };
    default:
      return state;
  }
}
