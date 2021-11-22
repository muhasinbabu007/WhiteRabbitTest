/*
 * Author: Muhassin Babu MM
 * Created Date: Monday November 22nd 2021
 * Version : 1.0.0
 * Product : user API controller.
 */

const { validateRequest } = require('../utils/validations');
const ResponseHandler = require('../utils/responseHandler')
const responseHandler = new ResponseHandler()
const Message = require('../utils/message.json').message_english;
const HttpCode = require('../utils/httpStatusCode.json').HttpStatusCode
const userService = require('../services/userServices')


/**
 * Controller function to create user
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @returns {Object} Http Response
 */
module.exports.createUser = async (req, res) => {
    try {
        let response;
        const validate = validateRequest.validate(req.body);
        if (validate.error) {
            response = responseHandler.BadRequestHandler(validate.error.details[0].message, HttpCode.BAD_REQUEST)
            return res.status(response.status).send(response)
        }
        const customer = await userService.createUserService(req.body);
        response = responseHandler.SuccessResponseHandler(req, customer, Message.USER_CREATED, HttpCode.CREATED)
        return res.status(response.status).send(response)
    } catch (err) {
        let response
        if (err.name === Message.BAD_REQUEST) {
            response = responseHandler.BadRequestHandler(err.message, err.code)
        } else {
            response = responseHandler.InternalServerErrorHandler(err)
        }
        res.status(response.status).send(response)
    }
}

/**
 * Controller function to get users
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @returns {Object} Http Response
 */
module.exports.getUsers = async (req, res) => {
    try {
        let user = await userService.getUsersService();
        const response = responseHandler.SuccessResponseHandler(req, user, Message.USERS_LISTED, HttpCode.OK)
        return res.send(response)
    } catch (err) {
        let response
        if (err.name === 'BAD_REQUEST') {
            response = responseHandler.BadRequestHandler(err.message)
        } else {
            response = responseHandler.InternalServerErrorHandler(err)
        }
        res.status(response.status).send(response)
    }
}

/**
 * Controller function to get users
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @returns {Object} Http Response
 */
module.exports.getUser = async (req, res) => {
    try {
        let user = await userService.getUserService(req.params.id);
        let response;
        if (user == null)
            response = responseHandler.SuccessResponseHandler(req, user, Message.ERRORS.USER_NOT_FOUND, HttpCode.OK)
        else
            response = responseHandler.SuccessResponseHandler(req, user, Message.USERS_LISTED, HttpCode.OK)
        return res.send(response)
    } catch (err) {
        let response
        if (err.name === 'BAD_REQUEST') {
            response = responseHandler.BadRequestHandler(err.message)
        } else {
            response = responseHandler.InternalServerErrorHandler(err)
        }
        res.status(response.status).send(response)
    }
}
