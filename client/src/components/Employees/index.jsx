import React, { useState } from 'react';

import Button from '../Button';
import DropDown from '../DropDown';
import Input from '../Input';
import EmployeeTable from '../EmployeeTable';

import './index.scss';

const Employee = () => {
  const [departments] = useState([
    'IT', 'Product', 'Data science', 'Wider Team', 'Accounting', 'Hr',
  ]);
  const [type] = useState([
    'Full Time', 'Intern', 'Contract',
  ]);
  const [inputVal, setInputVal] = useState('');

  // events
  const onClickSearch = () => (inputVal);
  const onClickAdd = () => ('add employee action =>');
  const handleDepartmentFilter = ({ target }) => (target.options[target.selectedIndex].value);
  const handleTypeFilter = () => ('done');
  const handleInputChange = ({ target: { value } }) => setInputVal(value);

  return (
    <div className="employee">
      <div className="form-inline col-sm-10 employee_div employee_div1">
        <Input type="text" placeholder="Search An Employee" changeEvent={handleInputChange} />
        <Button text="Search" colorClass="light" clickEvent={onClickSearch} />
        <Button text="Add Employee" colorClass="dark" clickEvent={onClickAdd} />
      </div>
      <div className="form-inline employee_selectDropDiv col-sm-10 employee_div">
        <DropDown options={departments} defaultOption="Department" changeEvent={handleDepartmentFilter} />
        <DropDown options={type} defaultOption="Employee Type" changeEvent={handleTypeFilter} />
      </div>
      <div className="form-inline table-responsive-sm employee_selectDropDiv col-sm-10 employee_div employee_table">
        <EmployeeTable />
      </div>
    </div>
  );
};

export default Employee;
