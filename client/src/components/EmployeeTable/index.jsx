import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import EmployeeTableItem from '../EmployeeTableItem';
import { fetchEmployees } from '../../store/modules/employeeTable';

import './index.scss';

const EmployeeTable = ({ fetchEmployees: getEmployees, employeeTable: { users } }) => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    setEmployees(users);
  }, [users]);

  const employeeItems = employees.map(({
    name,
    email,
    employmentType,
    department,
  },
  index) => (
    <EmployeeTableItem
      key={email}
      name={name}
      employeeType={employmentType}
      department={department}
      index={index}
      email={email}
    />
  ));

  return (
    <table className="table table-hover shadow-sm p-3 mb-5 bg-white rounded">
      <thead>
        <tr>
          <th scope="col">s/n</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Employee Type</th>
          <th scope="col">Department</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {(employeeItems.length ? employeeItems : <p className="employeeTable_nothing">No employee available</p>)}
      </tbody>
    </table>
  );
};

EmployeeTable.propTypes = {
  fetchEmployees: PropTypes.func.isRequired,
  employeeTable: PropTypes.shape({
    users: PropTypes.shape([]).isRequired,
  }).isRequired,

};

export default connect((state) => state, { fetchEmployees })(EmployeeTable);
