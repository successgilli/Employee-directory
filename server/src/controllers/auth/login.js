import model from '../../db/models';

const { User } = model;

export default {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const [user] = await User.getUserByEmail(email.trim());

      if (!user) {
        return res.status(404).json({
          message: 'user not found',
          status: 404,
        });
      }

      const token = await user.authenticate(password.trim());

      if (!token) {
        return res.status(400).json({
          message: 'invalid username or password',
          status: 400,
        });
      }

      const { password: hashedPassword, ...response } = user.dataValues;

      return res.status(200).json({
        data: {
          token,
          user: response,
        },
        status: 200,
      });
    } catch (error) {
      return next(error);
    }
  },
};
