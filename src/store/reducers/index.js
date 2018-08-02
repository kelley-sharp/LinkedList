import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import error from './error';
import jobs from './jobs';
import users from './users';

const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  error,
  users
});

export default rootReducer;
