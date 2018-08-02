import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import './style.css';
import Card from '../../containers/Card';

export default class Homepage extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
  }

  render() {
    // let list
    // switch idx 0: list = this.WHATEVER.companies
    // switch idx 2: list = this.WHATEVER.people
    // list = this.WHATEVER.jobs

    const { jobs } = this.props;
    let displayJobs;
    if (jobs.length === 0) {
      displayJobs = (
        <h3>Sorry, no jobs are available right now. Please try again later.</h3>
      );
    } else {
      displayJobs = this.props.jobs.map(job => <Card key={job.id} job={job} />);
    }

    return (
      <div>
        <Header />
        <div className="feed">
          <h1>Jobs</h1>
          {displayJobs}
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  currentUser: PropTypes.object.isRequired,
  jobs: PropTypes.array.isRequired,
  fetchJobsRequest: PropTypes.func.isRequired
};
