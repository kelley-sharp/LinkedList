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
    console.log(this.props.search);
    let list = this.props.jobs;
    let category = 'Jobs';
    switch (this.props.search) {
      case 0:
        list = this.props.companies;
        category = 'Companies';
        break;
      case 1:
        list = this.props.jobs;
        category = 'Jobs';
        break;
      case 2:
        list = this.props.users;
        category = 'Users';
    }
    // switch idx 0: list = this.WHATEVER.companies
    // switch idx 2: list = this.WHATEVER.people
    // list = this.WHATEVER.jobs

    // const { jobs } = this.props;
    let displayList;
    if (list.length === 0) {
      displayList = (
        <h3>
          Sorry, no {category.toLowerCase()} are available right now. Please try
          again later.
        </h3>
      );
    } else {
      displayList = list.map(i => (
        <Card key={i.id} details={i} category={category} />
      ));
    }

    return (
      <div>
        <Header />
        <div className="feed">
          <h1>{category}</h1>
          {displayList}
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

// should have propTypes for users, companies, search props
// search.searchType
