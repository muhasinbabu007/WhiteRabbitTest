const ResponseHandler = require("../utils/responseHandler");
const responseHandler = new ResponseHandler();
module.exports.createErrorResponse = async (err) => {
    console.log('err', err);
    if (err.name === "BAD_REQUEST") {
        return responseHandler.BadRequestHandler(err.message);
    } else {
        return responseHandler.InternalServerErrorHandler(err);
    }
};
