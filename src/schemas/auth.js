import joi from "joi";

export const signupSchema = joi.object({
  name: joi.string().required().messages({
    "string.empty": "name cannot be empty",
    "any.required": "name must be fill",
  }),
  email: joi.string().required().messages({
    "string.empty": "email cannot be empty",
    "any.required": "email must be fill",
    "string.email": "Wrong format",
  }),
  password: joi.string().required().messages({
    "string.empty": "password cannot be empty",
    "any.required": "password must be fill",
  }),
  confirmPassword: joi.string().valid(joi.ref("password")).messages({
    "string.empty": "confirm password cannot be empty",
    "any.required": "confirm password must be fill",
    "any.only": "password does not match",
  }),
});

export const signinSchema = joi.object({
  email: joi.string().required().messages({
    "string.empty": "email cannot be empty",
    "any.required": "email must be fill",
    "string.email": "Wrong format",
  }),
  password: joi.string().required().messages({
    "string.empty": "password cannot be empty",
    "any.required": "password must be fill",
  }),
});
