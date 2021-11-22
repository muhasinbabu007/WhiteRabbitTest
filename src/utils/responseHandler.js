const HttpStatusCode = require('./httpStatusCode.json').HttpStatusCode;
const Message = require('./message.json').message_english;

class ResponseHandler {
	SuccessResponseHandler({ body, path, params, query }, response = {}, message = Message.SUCCESS_MESSAGE, statusCode) {
		return {
			status: statusCode || HttpStatusCode.OK,
			message,
			data: {
				requestParameter: {
					path,
					body,
					params,
					query
				},
				responseParameter: response
			},
			timestamp: Date.now()
		}
	}
	
	BadRequestHandler(message = Message.BAD_REQUEST_MESSAGE, statusCode) {
		return {
			status: statusCode || HttpStatusCode.BAD_REQUEST,
			error: {
				code: statusCode || HttpStatusCode.BAD_REQUEST,
				message: message
			},
			timestamp: Date.now()
		}
	}

	UnprocessableEntityHandler(message = Message.UNPROCESSABLE_ENTITY_MESSAGE) {
		return {
			status: HttpStatusCode.STATUS_FAILED,
			error: {
				code: HttpStatusCode.UNPROCESSABLE_ENTITY,
				message: message
			},
			timestamp: Date.now()
		}
	}

	NotFoundRequestHandler(message = Message.NOT_FOUND_MESSAGE) {
		return {
			status: HttpStatusCode.STATUS_FAILED,
			error: {
				code: HttpStatusCode.NOT_FOUND,
				message: message
			},
			timestamp: Date.now()
		}
	}

	InternalServerErrorHandler(error = {}) {
		console.log('error', error);
		return {
			status: HttpStatusCode.INTERNAL_SERVER_ERROR,
			error: {
				code: HttpStatusCode.INTERNAL_SERVER_ERROR,
				message:Message.INTERNAL_SERVER_ERROR_MESSAGE,
				details: error
			},
			"timestamp": Date.now()
		}
	}

	InvalidSessionHandler(message) {
		return {
			status: HttpStatusCode.STATUS_FAILED,
			error: {
				code: HttpStatusCode.UNAUTHORIZED,
				message: message
			},
			timestamp: Date.now()
		}
	}
}
module.exports = ResponseHandler;