export default {
  authUser: async (user) => {
    try {
    //   const delay = () => {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve();
    //       }, 10000);
    //     });
    //   };
    //   await delay();
      const url = process.env.URL;
      const response = await fetch(`${url}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });

      const jsonRes = await response.json();
      const { status, data } = jsonRes;

      if (status === 200) {
        return data;
      }
      const { message } = jsonRes;
      if (typeof message !== 'string') {
        return Object.values(message)[0];
      }

      return message;
    } catch (error) {
      return error.message;
    }
  },
};
