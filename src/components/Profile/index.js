import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import userDarkPlaceholder from '../../images/user_placeholder_dark.png';
import Card from '../../containers/Card';
import './style.css';
// import Card from '../../containers/Card';

export default class Profile extends Component {
  state = { loading: true };

  async componentDidMount() {
    await this.props.fetchJobsRequest();
    await this.props.fetchCurrentUserRequest(this.props.currentUser.username);
    await this.props.fetchUserRequest(this.props.match.params.username);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      <h1>Loading...</h1>;
    }
    // console.log(this.props.foundUser);
    let user = this.props.foundUser;
    let fullName = `${user.first_name} ${user.last_name}`;
    let photo = user.photo || userDarkPlaceholder;
    let currentCompany = user.current_company
      ? `Employed by ${user.current_company}`
      : '';

    let userJobs = new Set(this.props.foundUser.jobs);
    let jobsForCards = this.props.jobs.filter(job => {
      return userJobs.has(job.id);
    });
    console.log(jobsForCards);

    let displayList =
      this.props.currentUser.username === this.props.foundUser.username
        ? jobsForCards.map(i => <Card key={i.id} details={i} category="Jobs" />)
        : null;
    // let displayList = jobsForCards.map(i => (
    //   <Card key={i.id} details={i} category="Jobs" />
    // ));

    return (
      <div>
        <Header history={this.props.history} />
        <div className="card">
          <div className="profileCard">
            <div>
              <img src={photo} />
            </div>
            <h1>{fullName}</h1>
            <h2>{currentCompany}</h2>
          </div>
        </div>
        {displayList}
      </div>
    );
  }
}

// should have propTypes for users, companies, search props
// search.searchType
