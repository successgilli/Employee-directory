import React from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';

import Aside from '../../components/Aside';
import Handbugger from '../../components/handbugger';
import DashboardNav from '../../components/DashboardNav';
import Employees from '../../components/Employees';
// import DashboardHome from '../../components/DashboardHome';
import EmployeeForm from '../../components/EmployeeForm';


import './index.scss';

const Dashboard = ({ aside: { open }, dashboard: { page } }) => {
  const style = {
    width: open ? '84%' : '100%',
    marginLeft: open ? '16%' : '0%',
  };
  const renderDashboardPage = {
    Dashboard: <EmployeeForm />,
    Employee: <Employees />,
    'Edit Employee': <EmployeeForm />,
  };

  return (
    <div className="dashboard" style={style}>
      <Aside />
      <div className="dashboard_head1">
        <Handbugger />
      </div>
      <DashboardNav />
      {renderDashboardPage[page]}
    </div>
  );
};

Dashboard.propTypes = {
  aside: PropTypes.shape({
    open: PropTypes.bool.isRequired,
  }).isRequired,
  dashboard: PropTypes.shape({
    page: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect((state) => state)(Dashboard);
