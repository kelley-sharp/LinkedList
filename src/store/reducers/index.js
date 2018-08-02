import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import error from './error';
import jobs from './jobs';
import users from './users';
import search from './search';
import companies from './companies';

const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  error,
  users,
  search,
  companies
});

export default rootReducer;
