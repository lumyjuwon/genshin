import { $CombinedState, applyMiddleware, createStore, Store } from 'redux';
import { createMigrate, PersistConfig, persistReducer, persistStore, MigrationManifest } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import { isDev } from 'src/utils';
import rootReducer, { RootState } from './rootReducer';
import { initialGachaState } from './gacha/reducer';

const migrations = {
  1: (state: RootState) => {
    return {
      ...state,
      gacha: initialGachaState
    };
  },
  2: (state: RootState) => {
    return {
      ...state,
      gacha: {
        ...state.gacha,
        contents: {
          ...state.gacha.contents,
          isNextFivePickUp: false,
          isNextFourPickUp: false
        }
      }
    };
  }
};

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: storage,
  version: 2,
  whitelist: ['party', 'common', 'gacha'],
  // @ts-ignore
  migrate: createMigrate(migrations, { debug: false })
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const middleWare = isDev() ? applyMiddleware(logger) : undefined;
const store: Store<RootState, any> = createStore(enhancedReducer, middleWare);
const persistor = persistStore(store);

export { store, persistor };
