import { applyMiddleware, createStore, Store } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import rootReducer, { RootState } from './rootReducer';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: storage,
  whitelist: ['party']
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const store: Store<RootState, any> = createStore(enhancedReducer, applyMiddleware(logger));
const persistor = persistStore(store);

export { store, persistor };
