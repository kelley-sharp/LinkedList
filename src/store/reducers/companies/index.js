import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];

export default function companiesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_COMPANIES_SUCCESS: {
      // expects an array
      return action.companies;
    }
    default:
      return state;
  }
}
