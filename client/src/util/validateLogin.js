const regEx = {
  email: /^([a-zA-Z0-9]+)@[a-z]{2,6}\.[a-z]{2,6}$/,
  password: /^(.){6,}$/,
};

export default {
  validate: (field, value) => regEx[field].test(value),
};
