import { ActionTypes, PartyAction, PartyState } from './types';

const initialState: PartyState = {
  partyData: {},
  partyPreset: {}
};

export function partyReducer(state = initialState, action: PartyAction): PartyState {
  switch (action.type) {
    case ActionTypes.SetParty:
      return {
        ...state,
        partyData: action.payload
      };
    case ActionTypes.SaveParty:
      return {
        ...state,
        partyPreset: Object.assign({}, state.partyPreset, action.payload)
      };
    default:
      return state;
  }
}
