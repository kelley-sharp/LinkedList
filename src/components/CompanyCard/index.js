import React, { Component } from 'react';
// import './style.css';
import CompanyProfilePlaceholder from '../../images/company_placeholder.png';

export default class CompanyCard extends Component {
  render() {
    const companyPicture = this.props.details.photo
      ? this.props.details.photo
      : CompanyProfilePlaceholder;
    // debugger;
    return (
      <div className="cntnr">
        <div className="image">
          <img src={companyPicture} />
        </div>
        <div className="info">
          <b>
            <p>{this.props.details.name}</p>
          </b>
          <b>
            <p>@{this.props.details.handle}</p>
          </b>
        </div>
        {/* <div className="action">
          <button>Apply</button>
        </div> */}
      </div>
    );
  }
}
