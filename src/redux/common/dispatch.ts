import { store } from '../store';
import { SetRegion } from './actions';

export const commonDispatch = {
  SetRegion: (region: string) => store.dispatch(SetRegion(region))
};
