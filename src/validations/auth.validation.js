const { validator } = require('cpf-cnpj-validator');
const Joi = require('joi').extend(validator);
const { password } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
};

const registerCpf = {
  body: Joi.object().keys({
    username: Joi.document().cpf().required(),
    email: Joi.string().required().email(),
    name: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const loginCpf = {
  body: Joi.object().keys({
    username: Joi.document().cpf().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

const primeiroAcesso = {
  body: Joi.object().keys({
    username: Joi.document().cpf(),
    password: Joi.string().required(),
  }),
};

const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

module.exports = {
  register,
  registerCpf,
  login,
  loginCpf,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  primeiroAcesso,
  verifyEmail,
};
