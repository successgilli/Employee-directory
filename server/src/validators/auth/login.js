export default {
  validateLogin: async (req, res, next) => {
    try {
      const errors = {};
      const { password, email } = req.body;

      if (!email) errors.email = 'email is required';
      if (!password) errors.password = 'passwords are required';

      if (Object.keys(errors).length) {
        return res.status(400).json({
          message: errors,
          status: 400,
        });
      }

      if (!/^([a-zA-Z0-9]+)@[a-z]{2,6}\.[a-z]{2,6}$/.test(email)) {
        errors.email = 'invalid email format';
      }
      if (!/^(.){6,}$/.test(password)) {
        errors.password = 'invalid password';
      }

      if (Object.keys(errors).length) {
        return res.status(400).json({
          message: errors,
          status: 400,
        });
      }
      return next();
    } catch (error) {
      return next(error);
    }
  },
};
