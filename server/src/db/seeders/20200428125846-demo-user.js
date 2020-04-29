
import "regenerator-runtime/runtime.js";
'use strict';


import { v1 as uuidv1 } from 'uuid';

import passwordHash from '../../helpers/bcrypt';

const { hash } = passwordHash;

const user =   {
  id: uuidv1(),
  firstName: 'Gilbert',
  lastName: 'Eli',
  employeeID: 1,
  offerLetter: 'file Path',
  displayPicture: 'Profile pic',
  dateOfBirth: '02-Jan-1890',
  age: 23,
  phoneNumber: 9083764563,
  maritalStatus: 'Single',
  email: 'successgilli@gmail.com',
  homeAddress: 'Benin Sapele Road',
  employmentType: 'Full Time',
  department: 'Data Science',
  salary: 100000,
  allocatedLeaveDays: 20,
  numberofLeaveDaysTaken: 5,
  leaveBalance: 15,
  hmoLevel: 'Gold',
  staffLevel: 7,
  nextOfKinName: 'Gilbert Awaji-mitop',
  nextOfKinAddress: 'Marine base P/H Rivers State',
  nextOfKinPhoneNumber: 9036746567,
  spouseName: 'Hottest',
  spouseAddress: 'Benin Road',
  spousePhoneNumber: 937938982,
  emergencyContactName: 'Emergency Name',
  emergencyContactPhoneNumber: 938798937893,
  updatedAt: new Date(),
  createdAt: new Date()
}



module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    user.password = await hash('admin@123#');

    return queryInterface.bulkInsert('Users', [ user ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
