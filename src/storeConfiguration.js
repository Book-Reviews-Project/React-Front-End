import { applyMiddleware, createStore } from 'redux';

import reducer from './reducer';
import rootSaga from './saga';
import middleware, { sagaMiddleware } from './middleware';
// import initialState from './util/setUpInitialState';

const configStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );

  sagaMiddleware.run(rootSaga);

  return {
    store
  };
};

const { store } = configStore();
export default store;