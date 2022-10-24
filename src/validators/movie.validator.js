import Joi from "joi";

const movieValidator = Joi.object({
    movieName: Joi.string().regex(/^[a-zA-Z0-9]{1,30}$/).required().messages({
        'string.pattern.base': 'Only English letters, not less than 2 and not more than 30 and numbers'
    })
})

export {
    movieValidator
}
