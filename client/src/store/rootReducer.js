import { combineReducers } from 'redux';

// modules
import aside from './modules/aside';
import dashboard from './modules/dashBoard';

export default combineReducers({
  aside,
  dashboard,
});
