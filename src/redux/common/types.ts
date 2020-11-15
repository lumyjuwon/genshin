export enum Continent {
  Asia = 'Asia',
  US = 'US',
  EU = 'EU'
}

export interface CommonState {
  server: Continent;
}

export enum ActionTypes {
  SetServer = 'SetServer'
}

interface SetServer {
  type: ActionTypes.SetServer;
  payload: Continent;
}

export type CommonAction = SetServer;
