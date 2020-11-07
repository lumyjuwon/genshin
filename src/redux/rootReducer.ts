import { combineReducers } from 'redux';

import { partyReducer } from './party/reducer';

const rootReducer = combineReducers({
  party: partyReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
