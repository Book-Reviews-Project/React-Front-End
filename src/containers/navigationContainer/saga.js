import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GETLOGIN } from './constants';
import { getLogInSuccess, getLogInError } from './actions';

export function* checkUserLogIn() {
  try {
    const data = axios.get();
    yield put(getLogInSuccess(data));
  } catch (error) {
    yield put(getLogInError(error));
  }
}

function* watchFetchData() {
  yield takeEvery(GETLOGIN, checkUserLogIn);
}

export default watchFetchData;