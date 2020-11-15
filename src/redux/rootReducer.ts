import { combineReducers } from 'redux';

import { commonReducer } from './common/reducer';
import { partyReducer } from './party/reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  party: partyReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
