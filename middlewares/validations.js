const { celebrate, Joi } = require('celebrate');
const { VERIFICATION_URL, VERIFICATION_EMAIL } = require('../utils/constants');

const validationLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(VERIFICATION_EMAIL),
    password: Joi.string().required(),
  }),
});

const validationCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(VERIFICATION_EMAIL),
    password: Joi.string().required(),
  }),
});

const validationUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(VERIFICATION_EMAIL),
  }),
});

const validationCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(VERIFICATION_URL),
    trailer: Joi.string().required().pattern(VERIFICATION_URL),
    thumbnail: Joi.string().required().pattern(VERIFICATION_URL),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validationDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
});

module.exports = {
  validationLogin,
  validationCreateUser,
  validationUpdateUser,
  validationCreateMovie,
  validationDeleteMovie,
};
