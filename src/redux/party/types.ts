import { ArtifactName, WeaponName } from 'src/resources/data';

export interface PartyState {
  partyData: PartyData;
  partyPreset: PartyPreset;
}

export enum ActionTypes {
  SetParty = 'SetParty',
  SaveParty = 'SaveParty',
  DeleteParty = 'DeleteParty'
}

export interface PartyData {
  [characterName: string]: {
    Weapon: {
      Bow?: WeaponName;
      Catalyst?: WeaponName;
      Claymore?: WeaponName;
      Polearm?: WeaponName;
      Sword?: WeaponName;
    };
    Artifact: {
      Flower?: ArtifactName;
      Feather?: ArtifactName;
      HourGlass?: ArtifactName;
      HolyGrail?: ArtifactName;
      Crown?: ArtifactName;
    };
  };
}

interface SetParty {
  type: ActionTypes.SetParty;
  payload: PartyData;
}

export interface PartyPreset {
  [partyName: string]: {
    partyData: PartyData;
    latestTime: string;
  };
}

interface SaveParty {
  type: ActionTypes.SaveParty;
  payload: PartyPreset;
}

interface DeleteParty {
  type: ActionTypes.DeleteParty;
  payload: PartyPreset;
}

export type PartyAction = SetParty | SaveParty | DeleteParty;
