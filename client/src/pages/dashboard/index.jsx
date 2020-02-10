import React from 'react';

import Aside from '../../components/Aside';

import './index.scss';

const Dashboard = () => (
  <div className="dashboard">
    <Aside />
    <div className="dashboard_main" />
  </div>
);

export default Dashboard;
