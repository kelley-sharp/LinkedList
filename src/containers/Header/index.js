import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../store/actions/auth';
import { fetchJobsRequest } from '../../store/actions/jobs';
import { fetchUsersRequest } from '../../store/actions/users';
import { fetchCompaniesRequest } from '../../store/actions/companies';
// fetchCompanies

function mapStateToProps(reduxState) {
  return {
    // currentUser: reduxState.currentUser,
    displayName: reduxState.currentUser.first_name,
    profilePic: reduxState.currentUser.photo
  };
}

export default connect(
  mapStateToProps,
  { logout, fetchJobsRequest, fetchUsersRequest, fetchCompaniesRequest }
  // fetchCompanies
)(Header);
