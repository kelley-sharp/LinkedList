import React, { Component } from 'react';
import './style.css';
import CompanyProfilePlaceholder from '../../images/company_placeholder.png';
import JobCard from '../../containers/JobCard';
import UserCard from '../../containers/UserCard';
import CompanyCard from '../../containers/CompanyCard';

export default class Card extends Component {
  render() {
    const companyPicture = this.props.details.photo
      ? this.props.details.photo
      : CompanyProfilePlaceholder;

    let cardContent;
    switch (this.props.category) {
      case 'Jobs':
        cardContent = <JobCard details={this.props.details} />;
        break;
      case 'Users':
        cardContent = <UserCard details={this.props.details} />;
        break;
      case 'Companies':
        cardContent = <CompanyCard details={this.props.details} />;
        break;
    }
    // debugger;
    return (
      <div className="Card">
        {cardContent}
        {/* <div className="cntnr">
          <div className="image">
            <img src={companyPicture} />
          </div>
          <div className="info">
            <p>
              {this.props.details.title} <b> @{this.props.details.company}</b>
            </p>
            <p>
              {this.props.details.salary} |
              {this.props.details.equity}%
            </p>
          </div>
          <div className="action">
            <button>Apply</button>
          </div>
        </div> */}
      </div>
    );
  }
}

// jobs aren't gonna have photos
// we need 3 new child components for cards

//
