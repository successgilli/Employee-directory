'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      employeeID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      offerLetter: {
        allowNull: false,
        type: Sequelize.STRING
      },
      displayPicture: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATE
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      maritalStatus: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'single'
      },
      homeAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      employmentType: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'full time'
      },
      contractEndDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      department: {
        allowNull: false,
        type: Sequelize.STRING
      },
      salary: {
        allowNull: false,
        type: Sequelize.FLOAT(2,6)
      },
      allocatedLeaveDays: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      numberofLeaveDaysTaken: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      leaveBalance: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      hmoLevel: {
        allowNull: true,
        type: Sequelize.STRING
      },
      staffLevel: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      lastPromotionDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      nextOfKinName: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nextOfKinAddress: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nextOfKinPhoneNumber: {
        allowNull: true,
        type: Sequelize.STRING
      },
      spouseName: {
        allowNull: true,
        type: Sequelize.STRING
      },
      spouseAddress: {
        allowNull: true,
        type: Sequelize.STRING
      },
      spousePhoneNumber: {
        allowNull: true,
        type: Sequelize.STRING
      },
      emergencyContactName: {
        allowNull: true,
        type: Sequelize.STRING
      },
      emergencyContactPhoneNumber: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
