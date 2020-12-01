import { store } from '../store';
import { SetConsumedResin } from './actions';

export const commonDispatch = {
  SetConsumedResin: (resin: number) => store.dispatch(SetConsumedResin(resin))
};
