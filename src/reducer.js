import { combineReducers } from 'redux';
import navReducer from './containers/navigationContainer/reducer';
import userState from './content/user.json';

const initialState = {
  user: userState
};

function root(state=initialState, action) {
  switch(action.type){
  default:
    return state;
  }

}


const RootReducer = combineReducers({
  root: root,
  navigationReducer: navReducer
});

export default RootReducer;