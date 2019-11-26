import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers/index';

export const initialiseStore = (_applyMiddleware = applyMiddleware, _compose = compose, _createStore = createStore) => {
  const reduxDevTools = (window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : []);

  const enhancers = _compose.apply(null, [...reduxDevTools]);

  return _createStore(reducers, {}, enhancers);
};

export default initialiseStore();
