'use strict';

import { v1 as uuidv1 } from 'uuid';

const user =   {
  id: uuidv1(),
  firstName: 'Gilbert',
  lastName: 'Eli',
  employeeID: 1,
  password: 'fdefgretg5ew b',
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
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
