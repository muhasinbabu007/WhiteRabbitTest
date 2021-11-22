const Joi = require("joi");

module.exports.validateRequest = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    introduction: Joi.string()
        .min(10)
        .max(250)
        .required(),   
    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
    phoneNumber: Joi.string()
        .alphanum()
        .min(7)
        .max(20)
        .required(),
    experience: Joi.string()
        .min(0)
        .max(250)
        .allow(null, ''),
    achievements: Joi.string()
        .min(0)
        .max(250)
        .allow(null, '')
});