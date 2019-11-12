import { all } from 'redux-saga/effects';
import { getDataWatcherSaga } from './containers/GithubInfo/sagas';

export default function* rootSaga(){
  yield all([
    getDataWatcherSaga()
  ]);
};