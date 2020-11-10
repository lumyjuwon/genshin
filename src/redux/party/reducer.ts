import { ActionTypes, PartyAction, PartyState, PartyPreset } from './types';

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
    case ActionTypes.DeleteParty:
      const notDeleted = Object.keys(state.partyPreset).filter((name) => name !== Object.keys(action.payload)[0]);
      let parties: PartyPreset = {};
      notDeleted.forEach((name) => {
        parties[name] = state.partyPreset[name];
      });
      return {
        ...state,
        partyPreset: parties
      };
    default:
      return state;
  }
}
