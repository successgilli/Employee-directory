import { combineReducers } from 'redux';

// modules
import aside from './modules/aside';
import dashboard from './modules/dashBoard';
import employeeTable from './modules/employeeTable';
import employeeForm from './modules/employeeForm';

export default combineReducers({
  aside,
  dashboard,
  employeeTable,
  employeeForm,
});
