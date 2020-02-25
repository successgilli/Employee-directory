import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import { togglePage } from '../../store/modules/dashBoard';
import { callEmployeeForm } from '../../store/modules/employeeForm';

import './index.scss';

const EditIcon = ({ togglePage: setPage, employee, callEmployeeForm: setDetails }) => {
  const handleClick = () => {
    setPage('Edit Employee');
    setDetails(employee);
  };

  return (
    <button className="editIcon_btn" type="button" onClick={handleClick}>
      <i className="material-icons editIcon">
        edit
      </i>
    </button>
  );
};

EditIcon.propTypes = {
  togglePage: PropTypes.func.isRequired,
  employee: PropTypes.shape({}).isRequired,
  callEmployeeForm: PropTypes.func.isRequired,
};

export default connect((state) => state, { togglePage, callEmployeeForm })(EditIcon);
