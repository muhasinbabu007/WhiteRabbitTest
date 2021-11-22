/*
 * Author: Muhassin Babu MM
 * Created Date: Monday November 22nd 2021
 * Version : 1.0.0
 * Product : User Model.
 */

"use strict";

const { Model } = require('sequelize');
module.exports = (sequelize, type) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: type.STRING(100),
    lastName: type.STRING(100),
    introduction: type.TEXT,
    email: {
      type: type.STRING(255),
      allowNull: false,
      unique: true,
    },
    phoneNumber: type.STRING(30),
    experience: type.TEXT,
    achievements: type.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};