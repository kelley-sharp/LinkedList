import React, { Component } from 'react';
import './style.css';
import CompanyProfilePlaceholder from '../../images/company_placeholder.png';

export default class Card extends Component {
  render() {
    const companyPicture = this.props.job.photo
      ? this.props.job.photo
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
              {this.props.job.title} <b> @{this.props.job.company}</b>
            </p>
            <p>
              {this.props.job.salary} |
              {this.props.job.equity}%
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
