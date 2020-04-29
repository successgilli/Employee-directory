import jwt from 'jsonwebtoken';
import passwordHash from '../../helpers/bcrypt';

const { compare } = passwordHash;

'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(500)
    },
    employeeID: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    offerLetter: {
      allowNull: false,
      type: DataTypes.STRING
    },
    displayPicture: {
      allowNull: true,
      type: DataTypes.STRING
    },
    dateOfBirth: {
      allowNull: false,
      type: DataTypes.DATE
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING
    },
    maritalStatus: {
      allowNull: false,
      type: DataTypes.STRING
    },
    homeAddress: {
      allowNull: false,
      type: DataTypes.STRING
    },
    employmentType: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'full time'
    },
    contractEndDate: {
      allowNull: true,
      type: DataTypes.DATE
    },
    department: {
      allowNull: false,
      type: DataTypes.STRING
    },
    salary: {
      allowNull: false,
      type: DataTypes.FLOAT(2, 6)
    },
    allocatedLeaveDays: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    numberofLeaveDaysTaken: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    leaveBalance: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hmoLevel: {
      allowNull: true,
      type: DataTypes.STRING
    },
    staffLevel: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    lastPromotionDate: {
      allowNull: true,
      type: DataTypes.DATE
    },
    nextOfKinName: {
      allowNull: true,
      type: DataTypes.STRING
    },
    nextOfKinAddress: {
      allowNull: true,
      type: DataTypes.STRING
    },
    nextOfKinPhoneNumber: {
      allowNull: true,
      type: DataTypes.STRING
    },
    spouseName: {
      allowNull: true,
      type: DataTypes.STRING
    },
    spouseAddress: {
      allowNull: true,
      type: DataTypes.STRING
    },
    spousePhoneNumber: {
      allowNull: true,
      type: DataTypes.STRING
    },
    emergencyContactName: {
      allowNull: true,
      type: DataTypes.STRING
    },
    emergencyContactPhoneNumber: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };

  User.getUserByEmail = async (email) => {
    const response = await User.findAll({
      where: { email }
    });

    return response;
  };

  User.prototype.authenticate = async function(plainPassword) {
    let token = null;
    const { password, id } = this;
    const truthy = await compare(plainPassword, password);

    if(truthy) {
      token = jwt.sign({userId : id }, 'secretekey', { expiresIn: '2w' });
    }

    return token;
  }

  return User;
};
