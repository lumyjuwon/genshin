export interface CommonState {
  region: string;
}

export enum ActionTypes {
  SetRegion = 'SetRegion'
}

interface SetRegion {
  type: ActionTypes.SetRegion;
  payload: string;
}

export type CommonAction = SetRegion;
