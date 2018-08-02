import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../store/actions/auth';
import { fetchJobsSearchRequest } from '../../store/actions/jobs';
import { fetchUsersSearchRequest } from '../../store/actions/users';

function mapStateToProps(reduxState) {
  return {
    // currentUser: reduxState.currentUser,
    displayName: reduxState.currentUser.first_name,
    profilePic: reduxState.currentUser.photo
  };
}

export default connect(
  mapStateToProps,
  { logout, fetchJobsSearchRequest, fetchUsersSearchRequest }
)(Header);
