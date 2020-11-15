import { ActionTypes } from './types';

export function SetRegion(region: string) {
  return {
    type: ActionTypes.SetRegion,
    payload: region
  };
}
