/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

import Input from '../Input';
import DropDown from '../DropDown';
import FormWrapper from '../FormWrapper';
import Image from '../Image';


import './index.scss';

const EmployeeForm = () => {
  let classVals = ['employeeForm_vicible', 'employeeForm_invicible', 'employeeForm_invicible'];
  const [classname, setClass] = useState(classVals);
  const maritalOption = ['Single', 'Married'];
  const departmentOtion = ['Data Science', 'Products', 'Project', 'IT', 'HR', 'Account'];
  const salaryOption = [100000, 200000, 300000];
  const contractOption = ['Full Time', 'Intern', 'Part Time'];

  const toggleDivs = (position) => {
    classVals = classVals.map((item, index) => {
      if (position === index) return 'employeeForm_vicible';
      return 'employeeForm_invicible';
    });
    setClass(classVals);
  };

  return (
    <div className="employeeForm">
      <div className="employeeForm_avartardiv">
        <Image />
      </div>
      <div className="employeeForm_formdiv">
        <FormWrapper onNextClick={toggleDivs}>
          <div className={classname[0]}>
            <div className="form-row">
              <Input placeholder="Name" label="Name" name="name" bootStrapWidth="col-sm-6" />
              <Input placeholder="Email" label="Email" name="email" bootStrapWidth="col-sm-6" />
            </div>
            <div className="form-row">
              <Input placeholder="Address" label="Address" name="address" bootStrapWidth="col-sm-6" />
              <Input placeholder="Phone" label="Phone" type="number" name="phone" bootStrapWidth="col-sm-6" />
            </div>
            <div className="form-row" style={{ justifyContent: 'space-between' }}>
              <Input placeholder="Date of birth" label="Date of Birth" type="date" name="dob" bootStrapWidth="col-sm-6" />
              <DropDown options={maritalOption} defaultOption="Marital Status" bootStrapWidth="col-sm-3" label="Marital Status" />
              <Input placeholder="Age" label="Age" type="number" name="age" bootStrapWidth="col-sm-3" />
            </div>
            <div className="form-row" style={{ justifyContent: 'space-between' }}>
              <DropDown options={departmentOtion} defaultOption="Department" bootStrapWidth="col-sm-6" label="Department" />
              <DropDown options={salaryOption} defaultOption="Salary" bootStrapWidth="col-sm-3" label="Salary" />
              <DropDown options={contractOption} defaultOption="Employment Type" bootStrapWidth="col-sm-3" label="Employment Type" />
            </div>
          </div>
          <div className={classname[1]}>
            <div className="form-row" style={{ justifyContent: 'space-between' }}>
              <Input placeholder="Offer Letter" label="Offer letter" type="file" name="offerletter" bootStrapWidth="col-sm-6" />
              <Input placeholder="Contract End Date" label="Contract End Date" type="date" name="contractenddate" bootStrapWidth="col-sm-3" />
              <Input placeholder="Allocated Leave" label="Allocated Leave" type="number" name="allocated leave" bootStrapWidth="col-sm-3" />
            </div>
          </div>
          <div className={classname[2]}>
            bears
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default EmployeeForm;

// offerLetter: 'file Path',
// contractEndDate: 'nn',
// allocatedLeaveDays: 20,
// numberofLeaveDaysTaken: 5,
// leaveBalance: 15,
// hmoLevel: 'Gold',
// staffLevel: 7,
// lastPromotionDate: '2nd of Jan 2019',
// nextOfKinName: 'Gilbert Awaji-mitop',
// nextOfKinAddress: 'Marine base P/H Rivers State',
// nextOfKinPhoneNumber: 9036746567,
// spouseName: 'Hottest',
// spouseAddress: 'Benin Road',
// spousePhoneNumber: 937938982,
// emergencyContactName: 'Emergency Name',
// emergencyContactPhoneNumber: 938798937893,
