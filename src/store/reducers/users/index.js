import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];

export default function usersReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_USERS_SEARCH_SUCCESS: {
      // expects an array
      return action.users;
    }
    default:
      return state;
  }
}
