import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = 1;

export default function searchReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.UPDATE_SEARCH_TYPE: {
      // expects an integer
      return action.searchType;
    }
    default:
      return state;
  }
}
