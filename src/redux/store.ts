import { applyMiddleware, createStore, Store } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import { isDev } from 'src/utils';
import rootReducer, { RootState } from './rootReducer';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: storage,
  whitelist: ['party', 'common']
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const middleWare = isDev() ? applyMiddleware(logger) : undefined;
const store: Store<RootState, any> = createStore(enhancedReducer, middleWare);
const persistor = persistStore(store);

export { store, persistor };
