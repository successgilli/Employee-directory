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
      <div className="form-inline employee_div employee_div1">
        <Input
          type="text"
          placeholder="Search An Employee"
          name="searchEmployee"
          changeEvent={handleInputChange}
          bootStrapWidth="col-sm-7"
        />
        <Button text="Search" colorClass="light" clickEvent={onClickSearch} />
        <Button text="Add Employee" colorClass="dark" clickEvent={onClickAdd} />
      </div>

      <div className="form-row employee_selectDropDiv employee_div">
        <DropDown options={departments} defaultOption="Department" changeEvent={handleDepartmentFilter} bootStrapWidth="col-sm-3" classname="selectDropDown_custom1" />
        <DropDown options={type} defaultOption="Employee Type" changeEvent={handleTypeFilter} bootStrapWidth="col-sm-3" classname="selectDropDown_custom1" />
      </div>
      <div className="form-inline table-responsive-sm col-sm-10 employee_selectDropDiv employee_div employee_table">
        <EmployeeTable />
      </div>
    </div>
  );
};

export default Employee;
