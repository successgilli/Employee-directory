import bcrypt from 'bcrypt';

export default {
  hash: async (password) => {
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);

    return hash;
  },
  compare: async (plain, hash) => {
    const result = await bcrypt.compare(plain, hash);

    return result;
  },
};
