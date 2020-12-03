import { combineReducers } from 'redux';

import { commonReducer } from './common/reducer';
import { gachaReducer } from './gacha/reducer';
import { partyReducer } from './party/reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  gacha: gachaReducer,
  party: partyReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
