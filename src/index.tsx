import './resources/languages';

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'src/redux';

import App from './App';
import { isProduction } from './utils';
import { GlobalStyles } from './components/globalStyles';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

if (isProduction()) {
  console.log = () => {};
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
