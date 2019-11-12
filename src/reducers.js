import { combineReducers } from 'redux';
import githubInfoReducer from './containers/GithubInfo/reducer';

const createReducer = () => {
  const rootReducer = combineReducers({
    githubInfo: githubInfoReducer
  });
  return rootReducer;
};
export default createReducer;