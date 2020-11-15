import { ActionTypes, CommonAction, CommonState, Continent } from './types';

const initialState: CommonState = {
  server: Continent.Asia
};

export function commonReducer(state = initialState, action: CommonAction) {
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
