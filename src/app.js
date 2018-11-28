import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './storeConfiguration';

const history = createBrowserHistory();
// import { hot } from 'react-hot-loader';
// import { Switch, Route } from 'react-router'
import Navigation from './containers/navigationContainer';


function App () {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navigation />
      </Router>
    </Provider>
  );
}

export default App;