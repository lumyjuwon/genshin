import { SetGacha } from './actions';
import { GachaState } from './types';
import { store } from '../store';

export const gachaDispatch = {
  SetGacha: (gachaState: GachaState) => store.dispatch(SetGacha(gachaState))
};
