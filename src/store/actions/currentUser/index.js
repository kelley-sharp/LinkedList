import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
// import { fetchUsersSuccess } from '../users';

export function fetchCurrentUserRequest(username) {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_CURRENT_USER_REQUEST });
      let currentUser = await callAPI('GET', `/users/${username}`, true);
      dispatch(fetchCurrentUserSuccess(currentUser));
    } catch (error) {
      dispatch(fetchCurrentUserFail(error));
      return Promise.reject();
    }
  };
}

export function fetchCurrentUserSuccess(currentUser) {
  return {
    type: t.FETCH_CURRENT_USER_SUCCESS,
    user: currentUser
  };
}

export function fetchCurrentUserFail(error) {
  return {
    type: t.FETCH_CURRENT_USER_FAIL,
    error
  };
}
