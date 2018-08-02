import React, { Component } from 'react';
import './style.css';
import CompanyProfilePlaceholder from '../../images/company_placeholder.png';

export default class Card extends Component {
  render() {
    const companyPicture = this.props.details.photo
      ? this.props.details.photo
      : CompanyProfilePlaceholder;
    // debugger;
    return (
      <div className="Card">
        <div className="cntnr">
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
        </div>
      </div>
    );
  }
}

// jobs aren't gonna have photos
// we need 3 new child components for cards
