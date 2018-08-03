import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import { fetchJobsRequest } from '../../store/actions/jobs';
import { fetchCurrentUserRequest } from '../../store/actions/currentUser';
import { fetchUserRequest } from '../../store/actions/users';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    foundUser: reduxState.users,
    jobs: reduxState.jobs
  };
}

export default connect(
  mapStateToProps,
  { fetchJobsRequest, fetchCurrentUserRequest, fetchUserRequest }
)(Profile);
