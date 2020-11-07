import { ActionTypes, PartyAction, PartyData } from './types';

interface PartyState {
  partyPreset: {
    [partyName: string]: PartyData;
  };
}

const initialState: PartyState = {
  partyPreset: {}
};

export function partyReducer(state = initialState, action: PartyAction): PartyState {
  switch (action.type) {
    case ActionTypes.SaveParty:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
