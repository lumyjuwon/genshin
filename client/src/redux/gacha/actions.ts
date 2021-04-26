import { GachaState, ActionTypes } from './types';

export function SetGacha(gachaState: GachaState) {
  return {
    type: ActionTypes.SetGacha,
    payload: gachaState
  };
}

export function ClearGacha() {
  return {
    type: ActionTypes.ClearGacha
  };
}
