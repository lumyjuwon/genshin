export interface ArtifactState {
  consumedResin: number;
}

export enum ActionTypes {
  SetConsumedResin = 'SetConsumedResin'
}

interface SetConsumedResin {
  type: ActionTypes.SetConsumedResin;
  payload: number;
}

export type ArtifactAction = SetConsumedResin;
