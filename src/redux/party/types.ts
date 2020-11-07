import { ArtifactName, CharacterName, WeaponType } from 'src/resources/data';

export enum ActionTypes {
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

interface SaveParty {
  type: ActionTypes.SaveParty;
  payload: PartyData;
}

export type PartyAction = SaveParty;
