import { combineReducers } from 'redux';
import navReducer from './containers/navigationContainer/reducer';

const RootReducer = combineReducers({
  navigationReducer: navReducer
});

export default RootReducer;