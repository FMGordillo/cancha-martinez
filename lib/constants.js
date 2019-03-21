import axios from "axios"

export const VALID_TIMES = ["17:00", "18:00"]
export const DB_NAME = `cancha-martinez${(process.env.NODE_ENV !==
  "production" &&
  "-test") ||
  ""}`
export const DEFAULT_USER = {
  email: "user@mail.com",
  firstName: "user",
  fullName: "username",
  iat: 0,
  lastName: "name",
  uid: "000000000"
}

export const TERMS_AND_CONDITIONS_KEY = "cancha-martinez-terms-and-conditions"

export const CONSULT_REASONS = {
  terms_and_conditions: "Términos y Condiciones",
  stadium_manteniance: "Mantenimiento de cancha",
  administrative: "Cuestiones administrativas",
  technical: "Cuestiones técnicas del sitio web",
  other: "Otros"
}

/**
 * NOTE: Only works with Cloudant API endpoints
 * @param {String} url
 * @param {Object} data
 * @param {String} credentials API_KEY
 * @param {Object} config Optional
 * @returns {Promise}
 */
export const makeAPICall = async (url, data, credentials, config = {}) => {
  try {
    const result = await axios.post(url, data, {
      auth: {
        username: credentials.split(/[:]/)[0],
        password: credentials.split(/[:]/)[1]
      },
      ...config
    })
    return { payload: result, error: false }
  } catch (error) {
    return { payload: error, error: true }
  }
}
