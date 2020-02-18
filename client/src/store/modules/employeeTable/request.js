import users from '../../../db/user';

export default {
  fetchApi: async () => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 3000);
    });
    return res;
  },
};
