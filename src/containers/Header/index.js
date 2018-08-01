import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../store/actions/auth';

function mapStateToProps(reduxState) {
  return {
    // currentUser: reduxState.currentUser,
    displayName: reduxState.currentUser.first_name,
    profilePic: reduxState.currentUser.photo
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Header);
