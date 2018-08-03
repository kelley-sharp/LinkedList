import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../store/actions/auth';
import { fetchJobsRequest } from '../../store/actions/jobs';
import { fetchUsersRequest } from '../../store/actions/users';
import { fetchCompaniesRequest } from '../../store/actions/companies';
// fetchCompanies

function mapStateToProps(reduxState) {
  if (reduxState.currentUser.photo) {
    return {
      // currentUser: reduxState.currentUser,
      displayName: reduxState.currentUser.first_name,
      profilePic: reduxState.currentUser.photo,
      username: reduxState.currentUser.username
    };
  } else {
    return {
      displayName: reduxState.currentUser.first_name,
      username: reduxState.currentUser.username
    };
  }
}

export default connect(
  mapStateToProps,
  { logout, fetchJobsRequest, fetchUsersRequest, fetchCompaniesRequest }
  // fetchCompanies
)(Header);
