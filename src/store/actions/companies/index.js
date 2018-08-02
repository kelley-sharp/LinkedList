import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
import { updateSearchType } from '../search';

export function fetchCompaniesRequest(term, searchType = 0) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_COMPANIES_REQUEST });
      // call the API for /companies, auth required
      let companies = await callAPI('get', `/companies?search=${term}`, true);
      // dispatch the success action creator and the companies that we got back
      dispatch(fetchCompaniesSuccess(companies));
      dispatch(updateSearchType(searchType));
    } catch (error) {
      dispatch(fetchCompaniesFail(error));
      return Promise.reject();
    }
  };
}

export function fetchCompaniesSuccess(companies) {
  return { type: t.FETCH_COMPANIES_SUCCESS, companies };
}

export function fetchCompaniesFail(error) {
  return { type: t.FETCH_COMPANIES_FAIL, error };
}
