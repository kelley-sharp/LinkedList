import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
import { updateSearchType } from '../search';

export function createUserRequest(newUserPayload) {
  return async dispatch => {
    // login for users
    try {
      dispatch({ type: t.CREATE_USER_REQUEST });
      let newUser = await callAPI('POST', '/users', false, newUserPayload);
      dispatch(createUserSuccess(newUser));
    } catch (error) {
      dispatch(createUserFail(error));
      return Promise.reject();
    }
  };
}

function createUserSuccess(newUser) {
  return {
    type: t.CREATE_USER_SUCCESS,
    newUser
  };
}

function createUserFail(error) {
  return {
    type: t.CREATE_USER_FAIL,
    error
  };
}

// FETCH_USER_REQUEST
export function fetchUserRequest(username) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_USER_REQUEST });
      // call rthe API for /users/:username, auth required
      let user = await callAPI('get', `/users/${username}`, true);
      console.log(user);
      // dispatch the success action creator and the user that we got back
      dispatch(fetchUserSuccess(user));
    } catch (error) {
      dispatch(fetchUserFail(error));
      return Promise.reject();
    }
  };
}

function fetchUserSuccess(user) {
  return { type: t.FETCH_USER_SUCCESS, user };
}

function fetchUserFail(error) {
  return { type: t.FETCH_USER_FAIL, error };
}

export function fetchUsersRequest(term, searchType = 2) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_USERS_REQUEST });
      // call the API for /users, auth required
      let users = await callAPI('get', `/users?search=${term}`, true);
      // dispatch the success action creator and the users that we got back
      dispatch(fetchUsersSuccess(users));
      dispatch(updateSearchType(searchType));
    } catch (error) {
      dispatch(fetchUsersFail(error));
      return Promise.reject();
    }
  };
}

// I think following funcs might not need export
export function fetchUsersSuccess(users) {
  return { type: t.FETCH_USERS_SUCCESS, users };
}

export function fetchUsersFail(error) {
  return { type: t.FETCH_USERS_FAIL, error };
}
