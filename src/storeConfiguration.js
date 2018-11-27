import { applyMiddleware, CreateStore } from 'redux';

import middleware, { sagaMiddleware } from './middleware';

const configStore = (initialState = {}) => {
  const store = CreateStore({
    applyMiddleware(...middleware)
  });

  sagaMiddleware.run();

  return {
    store
  }
};

const { store } = configStore();
export default store;