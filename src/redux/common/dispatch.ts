import { store } from '../store';
import { SetServer } from './actions';
import { Continent } from './types';

export const commonDispatch = {
  SetServer: (server: Continent) => store.dispatch(SetServer(server))
};
