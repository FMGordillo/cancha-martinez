import axios from "axios";

export const DEFAULT_USER = {
  email: "user@mail.com",
  firstName: "user",
  fullName: "username",
  iat: 0,
  lastName: "name",
  uid: "000000000"
};

/**
 *
 * @param {String} url
 * @param {Object} params
 * @param {String} credentials API_KEY
 * @returns {Promise}
 */
export const makeAPICall = async (url, params, credentials) => {
  try {
    const result = await axios.post(url, params, {
      auth: {
        username: credentials.split(/[:]/)[0],
        password: credentials.split(/[:]/)[1]
      }
    });
    return { payload: result, error: false };
  } catch (error) {
    return { payload: error, error: true };
  }
};
