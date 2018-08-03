import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfilePlaceholder from '../../images/user_placeholder.png';
import './style.css';
import PropTypes from 'prop-types';

const DEFAULT_STATE = {
  searchText: '',
  searchCategoryIdx: 0,
  isDropdownVisible: false
};

export default class Header extends Component {
  state = DEFAULT_STATE;

  handleSearch = e => {
    e.preventDefault();
    switch (this.state.searchCategoryIdx) {
      case 0:
        this.props.fetchCompaniesRequest(
          encodeURI(this.state.searchText, this.state.searchCategoryIdx)
        );
        break;
      case 1:
        this.props.fetchJobsRequest(
          encodeURI(this.state.searchText, this.state.searchCategoryIdx)
        );
        break;
      case 2:
        this.props.fetchUsersRequest(
          encodeURI(this.state.searchText, this.state.searchCategoryIdx)
        );
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = idx => {
    this.setState({ searchCategoryIdx: idx });
  };

  handleLogout = () => {
    this.props.logout();
    console.log('after logout called, before history push');
    this.props.history.push('/login');
  };

  render() {
    const { searchText, searchCategoryIdx } = this.state;
    const { searchCategories, displayName, profilePic } = this.props;
    // debugger;
    return (
      <div className="Header">
        <Link to="/" className="Header-logo">
          LL
        </Link>
        <form className="search-form" onSubmit={this.handleSearch}>
          <div className="search">
            <span className="fas fa-search" />
            <input
              type="text"
              name="searchText"
              placeholder="Search for Companies, Jobs, or People"
              onChange={this.handleChange}
              value={searchText}
            />
          </div>
          <div className="search-categories">
            {searchCategories.map((category, i) => (
              <div key={category}>
                <input
                  type="radio"
                  id={category}
                  checked={i === searchCategoryIdx}
                  onChange={() => this.handleClick(i)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
          <input type="submit" value="Search" className="search-btn" />
        </form>

        <div className="profile-area">
          {/* <Link to={`/users/${this.reduxState.users[].username}`}> */}
          <img src={profilePic} alt="Profile" />
          <span>{displayName}</span>
          {/* </Link> */}
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  searchCategories: ['companies', 'jobs', 'people'],
  profilePic: UserProfilePlaceholder
};

Header.propTypes = {
  profilePic: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  searchCategories: PropTypes.array
};

// fetchJobsRequest should probably be in propTypes
