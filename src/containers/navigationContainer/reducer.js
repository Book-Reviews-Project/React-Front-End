import Navigation from '../../content/navigation.json';
import { SEARCHREVIEWSSUCCESS, SEARCHREVIEWSERROR } from './constants';

const initialState = {
  navItems: Navigation
};

function NavigatioNReducer(state = initialState, action) {
  switch (action.type){
  case SEARCHREVIEWSSUCCESS:
    return {...state, ...action.payload};
  case SEARCHREVIEWSERROR:
    return {...state, ...action.payload};
  default:
    return state;
  }
}

export default NavigatioNReducer;