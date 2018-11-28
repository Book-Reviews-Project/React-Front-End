import { all, fork } from 'redux-saga/effects';
import containerSaga from './containers/navigationContainer/saga';

export default function* root () {
  yield all([fork(containerSaga)]);
}