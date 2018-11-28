import { GETLOGIN, LOGINERROR, LOGINSUCCESS } from './constants';

export function getLogIn(payload) {
  return {
    action: GETLOGIN,
    payload: payload
  };
}

export function getLogInSuccess(payload) {
  return {
    action: LOGINSUCCESS,
    payload: payload
  };
}

export function getLogInError(payload) {
  return {
    action: LOGINERROR,
    payload: payload
  };
}