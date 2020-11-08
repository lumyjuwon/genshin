import { store } from '../store';

export const partySelector = () => {
  return store.getState().party;
};
