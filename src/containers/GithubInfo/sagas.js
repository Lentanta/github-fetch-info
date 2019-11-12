import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchData } from './action';
import { success, error } from './alert';
import { FETCH_DATA_REQUETS } from './action';
import axios from 'axios';

export const getGithubInfo = (params) => {
  if (params.includes('https://api.github.com/users/')) {
    return axios.request({
      method: 'get',
      url: params
    });
  } else {
    return axios.request({
      method: 'get',
      url: `https://api.github.com/users/${params}`
    });
  }

};

export function* getData(action) {
  try {
    const { data } = yield call(getGithubInfo, action.params)
    success.fire();
    yield put(fetchData(data));
  } catch{
    error.fire();
  }
};

export function* getDataWatcherSaga() {
  yield takeLatest(FETCH_DATA_REQUETS, getData);
};
