import React from 'react';
import PropTypes from 'proptypes';

import DeleteIcon from '../DeleteIcon/index';
import EditIcon from '../EditIcon/index';

import './index.scss';

const EmployeeTable = ({
  index,
  name,
  email,
  employeeType,
  department,
  employee,
}) => (
  <tr className="employeeTableItem">
    <th scope="row">{index + 1}</th>
    <td>{name}</td>
    <td>{email}</td>
    <td>{employeeType}</td>
    <td>{department}</td>
    <td>
      <EditIcon employee={employee} />
      <DeleteIcon />
    </td>
  </tr>
);

EmployeeTable.propTypes = {
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  employeeType: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  employee: PropTypes.shape({}).isRequired,
};

export default EmployeeTable;
