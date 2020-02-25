import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import './index.scss';

const DashboardNav = ({ dashboard: { page } }) => {
  const icon = {
    Dashboard: 'home',
    Employee: 'people',
    'Edit Employee': 'people',
  };

  return (
    <div className="dashboardNav">
      <i className="material-icons dashboardNav_icon">
        {icon[page]}
      </i>
      <p className="dashboardNav_title">{page}</p>
    </div>
  );
};

DashboardNav.propTypes = {
  dashboard: PropTypes.shape({
    page: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect((state) => state)(DashboardNav);
