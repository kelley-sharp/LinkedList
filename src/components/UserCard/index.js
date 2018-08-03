import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import './style.css';
import UserProfilePlaceholder from '../../images/user_placeholder.png';

export default class UserCard extends Component {
  render() {
    const userPicture = this.props.details.photo
      ? this.props.details.photo
      : UserProfilePlaceholder;
    // debugger;
    return (
      <Link to={`/users/${this.props.details.username}`}>
        <div className="cntnr">
          <div className="image">
            <img src={userPicture} />
          </div>
          <div className="info">
            <p>
              <b>@{this.props.details.username}</b>{' '}
              {this.props.details.first_name} {this.props.details.last_name}
            </p>
            <p>
              {this.props.details.current_company
                ? `Employed by @${this.props.details.current_company}`
                : ''}
            </p>
          </div>
          {/* <div className="action">
          <button>Apply</button>
        </div> */}
        </div>
      </Link>
    );
  }
}
