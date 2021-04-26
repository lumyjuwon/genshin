import { ActionTypes, PartyData, PartyAction, PartyPreset } from './types';

export function SetParty(partyData: PartyData) {
  return {
    type: ActionTypes.SetParty,
    payload: partyData
  };
}

export function SaveParty(partyData: PartyPreset): PartyAction {
  return {
    type: ActionTypes.SaveParty,
    payload: partyData
  };
}

export function DeleteParty(partyName: string) {
  return {
    type: ActionTypes.DeleteParty,
    payload: partyName
  };
}
