import { takeLatest, put } from 'redux-saga/effects';

import { CHANGE_FORM, EMPLOYEE_FORM } from './types';

const changeform = (payload) => ({ type: CHANGE_FORM, payload });
export const callEmployeeForm = (payload) => ({ type: EMPLOYEE_FORM, payload });

function* changeformWorker(action) {
  yield put(changeform(action.payload));
}

export function* watchEmployeeFormRequest() {
  yield takeLatest(EMPLOYEE_FORM, changeformWorker);
}

const initialState = {
  formVals: {
    name: '',
    employeeID: '',
    offerLetter: '',
    displayPicture: '',
    dateOfBirth: '',
    age: '',
    phoneNumber: '',
    maritalStatus: '',
    email: '',
    homeAddress: '',
    employmentType: '',
    contractEndDate: '',
    department: '',
    salary: '',
    allocatedLeaveDays: '',
    numberofLeaveDaysTaken: '',
    leaveBalance: '',
    hmoLevel: '',
    staffLevel: '',
    lastPromotionDate: '',
    nextOfKinName: '',
    nextOfKinAddress: '',
    nextOfKinPhoneNumber: '',
    spouseName: '',
    spouseAddress: '',
    spousePhoneNumber: '',
    emergencyContactName: '',
    emergencyContactPhoneNumber: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        formVals: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
