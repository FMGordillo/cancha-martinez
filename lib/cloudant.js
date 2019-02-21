import axios from "axios"

const credentials = {
  DB_NAME: `cancha-martinez${process.env.NODE_ENV !== "prod" && "-test"}`,
  API_HOST:
    "https://openwhisk.ng.bluemix.net/api/v1/namespaces/famargor%40ar.ibm.com_dev/actions/Cloudant%20FMGordillo",
  API_KEY:
    "b3ab8497-1978-4650-84f1-a2ba04d3df64:aaCmv0CmAR8DlbuwduXkRLgo8uSQXcOvhrMitpnGtVDPWZ4vqI1JQohmCOveZo07",
  QUERY: "blocking=true&result=true"
}

console.log(credentials.DB_NAME)

/**
 * CAREFUL!
 * Index doc must be created
 * See more in README.md
 */
const getMatchesQuery = {
  selector: {
    _id: {
      $gt: 0
    }
  },
  sort: [
    {
      reservation_date: "asc"
    }
  ]
}

/**
 * @returns {Promise}
 */
export const getMatches = () =>
  makeAPICall("exec-query-find", {
    dbname: credentials.DB_NAME,
    query: getMatchesQuery
  })

/**
 *
 * @param {Date} date
 * @returns {Promise}
 */
export const getMatchByDate = date =>
  makeAPICall("exec-query-find", {
    dbname: credentials.DB_NAME,
    query: { ...getMatchesQuery }
  })

/**
 *
 * @param {Object} doc _id and _rev must be provided (if uploaded)
 */
export const createMatch = doc =>
  makeAPICall("create-document", { dbname: credentials.DB_NAME, doc })

const makeAPICall = (endpoint, params) =>
  axios.post(
    `${credentials.API_HOST}/${endpoint}?${credentials.QUERY}`,
    params,
    {
      auth: {
        username: credentials.API_KEY.split(/[:]/)[0],
        password: credentials.API_KEY.split(/[:]/)[1]
      }
    }
  )
