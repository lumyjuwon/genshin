import { DeleteParty, SaveParty, SetParty } from './actions';
import { PartyData, PartyPreset } from './types';
import { store } from '../store';

export const partyDispatch = {
  SetParty: (partyData: PartyData) => store.dispatch(SetParty(partyData)),
  SaveParty: (partyPreset: PartyPreset) => store.dispatch(SaveParty(partyPreset)),
  DeleteParty: (partyPreset: PartyPreset) => store.dispatch(DeleteParty(partyPreset))
};
