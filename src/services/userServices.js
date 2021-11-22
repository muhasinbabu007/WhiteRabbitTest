/*
 * Author: Muhassin Babu MM
 * Created Date: Monday November 22nd 2021
 * Version : 1.0.0
 * Product : User functions.
 */
const CustomError = require('../utils/customError')
const Message = require('../utils/message.json').message_english;
const HttpCode = require('../utils/httpStatusCode.json').HttpStatusCode
const userRepository = require('../repositories/userRepositories')

/**
 * Service level function to create a new user
 * @param {Object} reqData Request obejct
 * @returns {Object} new customer
 */
module.exports.createUserService = async (reqData) => {
    try {
        const user = await userRepository.findUser(reqData.email);
        if (user) {
            throw new CustomError(Message.ERRORS.USER_MAIL_EXISTS, Message.BAD_REQUEST, HttpCode.CONFLICT)
        }

        const newCustomer = await userRepository.createUser(reqData);
        return newCustomer;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/**
 * Service level function to get users
 * @param {Object} reqData Request obejct
 * @returns {Object} new customer
 */
module.exports.getUsersService = async () => {
    try {
        const customers = await userRepository.getUsers();
        return customers
    } catch (error) {
        console.log('Error while listing customers', { error })
        throw error;
    }
}

/**
 * Service level function to get user
 * @param {Object} reqData Request obejct
 * @returns {Object} new customer
 */
module.exports.getUserService = async (id) => {
    try {
        const customers = await userRepository.getUser(id);
        return customers
    } catch (error) {
        console.log('Error while listing customers', { error })
        throw error;
    }
}