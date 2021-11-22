/*
 * Author: Muhassin Babu MM
 * Created Date: Monday November 22nd 2021
 * Version : 1.0.0
 * Product : User Repository
 */
const Users = require('../sequelize').user;

/**
 * Function to create user 
 * @param {Object} user Data to create user Object
 * @returns {Object} new user
 */
module.exports.createUser = async (user) => {
    return Users.create(user);
}


/**
 * Function to ger Users list
 * @returns {Array} all users
 */
module.exports.getUsers = async () => {
    return Users.findAll({ attributes: ['id', 'firstName', 'lastName', 'email'], raw: true });
}

/**
 * Function to ger User
 * @param {id}  id of user
 * @returns {Array} all users
 */
module.exports.getUser = async (id) => {
    return Users.findByPk(id);
}

/**
 * Function to search User
 * @param {email} email id of user
 * @returns {Array} all users
 */
module.exports.findUser = async (email) => {
    return Users.findOne({
        where: { email },
        raw: true
    });
}