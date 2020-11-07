import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage
};

// const store = createStore(rootReducer, applyMiddleware(logger));
const enhancedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(enhancedReducer, applyMiddleware(logger));
//@ts-ignore
const persistor = persistStore(store);

export { store, persistor };
