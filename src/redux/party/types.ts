import { ArtifactName, CharacterName, WeaponType } from 'src/resources/data';

export interface PartyState {
  partyData: PartyData;
  partyPreset: PartyPreset;
}

export enum ActionTypes {
  SetParty = 'SetParty',
  SaveParty = 'SaveParty'
}

export interface PartyData {
  [characterName: string]: {
    weapon: WeaponType;
    flower: ArtifactName;
    Feather: ArtifactName;
    HourGlass: ArtifactName;
    HolyGrail: ArtifactName;
    Crown: ArtifactName;
  };
}

interface SetParty {
  type: ActionTypes.SetParty;
  payload: PartyData;
}

export interface PartyPreset {
  [partyName: string]: PartyData;
}

interface SaveParty {
  type: ActionTypes.SaveParty;
  payload: PartyPreset;
}

export type PartyAction = SetParty | SaveParty;
