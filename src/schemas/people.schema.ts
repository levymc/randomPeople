import Joi from 'joi';

const peopleSchema = Joi.object({
  firstName: Joi.string().min(3).pattern(new RegExp("^[a-zA-Z ]+$")).required(),
  lastName: Joi.string(),
});

export default peopleSchema;
