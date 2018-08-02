import * as t from '../actionTypes';

export function updateSearchType(searchType) {
  return { type: t.UPDATE_SEARCH_TYPE, searchType };
}
