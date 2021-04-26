import { ActionTypes, Continent } from './types';

export function SetServer(server: Continent) {
  return {
    type: ActionTypes.SetServer,
    payload: server
  };
}
