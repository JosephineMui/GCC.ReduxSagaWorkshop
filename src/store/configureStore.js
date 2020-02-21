import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';

import defaultState from './getDefaultState';
import { rootReducer } from '../reducers';
import { initSagas } from './initSagas';

// =========================================================
// Saga error handling to catch any unhandled errors in Saga
// =========================================================
// eslint-disable-next-line no-console
const onError = error => console.log('Uncaught Global Saga Error:', error);

const sagaMiddleware = createSagaMiddleware({ onError });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
// const logger = createLogger();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, thunk));

const configureStore = (initialState = defaultState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  initSagas(sagaMiddleware);

  return store;
};

export default configureStore;
