import Navigation from '../../content/navigation.json';
import { LOGINSUCCESS, LOGINERROR } from './constants';
const initialState = {
  navItems: Navigation
};

function NavigatioNReducer(state = initialState, action) {
  switch (action.type){
  case LOGINSUCCESS:
    return {...state, ...action.payload};
  case LOGINERROR:
    return {...state, ...action.payload};
  default:
    return state;
  }
}

export default NavigatioNReducer;