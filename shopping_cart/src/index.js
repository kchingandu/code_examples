import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App store={store}/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

