import { SEARCHREVIEWS, SEARCHREVIEWSSUCCESS, SEARCHREVIEWSERROR } from './constants';

export function searchReview(payload) {
  return {
    type: SEARCHREVIEWS,
    payload: payload
  };
}

export function searchReviewSuccess(payload) {
  return {
    type: SEARCHREVIEWSSUCCESS,
    payload: payload
  };
}

export function searchReviewError(payload) {
  return {
    type: SEARCHREVIEWSERROR,
    payload: payload
  };
}