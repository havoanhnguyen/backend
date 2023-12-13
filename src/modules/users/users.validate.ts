import { MAIL_REGEX, PASSWORD_REGEX } from '@app/utils/regexp';
import Joi from 'joi';

export const userSignupValidate = Joi.object({
  email: Joi.string().pattern(MAIL_REGEX).required(),
  password: Joi.string().pattern(PASSWORD_REGEX).required(),
});

export const userSigninValidate = Joi.object({
  email: Joi.string().pattern(MAIL_REGEX).required(),
  password: Joi.string().pattern(PASSWORD_REGEX).required(),
});
