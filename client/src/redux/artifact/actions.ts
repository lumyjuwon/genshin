import { ActionTypes } from './types';

export function SetConsumedResin(resin: number) {
  return {
    type: ActionTypes.SetConsumedResin,
    payload: resin
  };
}
