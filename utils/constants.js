const OK = 200;
const CREATED = 201;
const VERIFICATION_URL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&/=]*)$/;
const VERIFICATION_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;
const secretKey = '9a3fdd3ee07854d2696bb1dcf30cb78390d8324fc3fb0cfe751cb01828b227eb';
module.exports = {
  OK,
  CREATED,
  VERIFICATION_URL,
  VERIFICATION_EMAIL,
  secretKey,
};
