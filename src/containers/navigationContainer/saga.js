import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { SEARCHREVIEWS } from './constants';
import { searchReviewSuccess, searchReviewError } from './actions';

export function* searchForReviews(action) {
  try {
    const payload = action.payload;
    const data = yield axios.get('http://localhost:8000/api/v1/review/search/' + payload, { headers:
      { 'crossDomain': true,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json' 
      }
    });
    yield put(searchReviewSuccess(data.data));
  } catch (error) {
    yield put(searchReviewError(error));
  }
}

function* watchFetchData() {
  yield takeEvery(SEARCHREVIEWS, searchForReviews);
}

export default watchFetchData;