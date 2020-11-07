import { ActionTypes, PartyAction, PartyData } from './types';

export function SaveParty(partyData: PartyData): PartyAction {
  return {
    type: ActionTypes.SaveParty,
    payload: partyData
  };
}
