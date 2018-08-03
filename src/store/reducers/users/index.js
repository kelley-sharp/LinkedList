import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];

export default function usersReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_USERS_SUCCESS: {
      // expects an array
      return action.users;
    }
    case t.FETCH_USER_SUCCESS: {
      // I think this is an object?
      return action.user;
    }
    default:
      return state;
  }
}
