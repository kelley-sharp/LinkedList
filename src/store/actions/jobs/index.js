import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';
import { updateSearchType } from '../search';

export function fetchJobsRequest(term = '', searchType = 1) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_JOBS_REQUEST });
      // call the API for /jobs, auth required
      let jobs;
      if (!term) {
        jobs = await callAPI('get', '/jobs', true);
      } else {
        jobs = await callAPI('get', `/jobs?search=${term}`, true);
      }
      // dispatch the success action creator and the jobs that we got back
      dispatch(fetchJobsSuccess(jobs));
      dispatch(updateSearchType(searchType));
    } catch (error) {
      dispatch(fetchJobsFail(error));
      return Promise.reject();
    }
  };
}

export function fetchJobsSuccess(jobs) {
  return { type: t.FETCH_JOBS_SUCCESS, jobs };
}

export function fetchJobsFail(error) {
  return { type: t.FETCH_JOBS_FAIL, error };
}

// export function fetchJobsSearchRequest(term) {
//   return async dispatch => {
//     try {
//       // tell everyone we're making the request
//       dispatch({ type: t.FETCH_JOBS_SEARCH_REQUEST });
//       // call the API for /jobs, auth required
//       let jobs = await callAPI('get', `/jobs?search=${term}`, true);
//       // dispatch the success action creator and the jobs that we got back
//       dispatch(fetchJobsSuccess(jobs));
//     } catch (error) {
//       dispatch(fetchJobsFail(error));
//       return Promise.reject();
//     }
//   };
// }
