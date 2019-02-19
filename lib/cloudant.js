import axios from "axios"

const credentials = {
  DB_NAME: "cancha-martinez-test",
  API_HOST:
    "https://openwhisk.ng.bluemix.net/api/v1/namespaces/famargor%40ar.ibm.com_dev/actions/Cloudant%20FMGordillo",
  API_KEY:
    "b3ab8497-1978-4650-84f1-a2ba04d3df64:aaCmv0CmAR8DlbuwduXkRLgo8uSQXcOvhrMitpnGtVDPWZ4vqI1JQohmCOveZo07",
  QUERY: "blocking=true&result=true"
}

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
  axios.post(
    `${credentials.API_HOST}/exec-query-find?${credentials.QUERY}`,
    {
      dbname: credentials.DB_NAME,
      query: getMatchesQuery
    },
    {
      auth: {
        username: credentials.API_KEY.split(/[:]/)[0],
        password: credentials.API_KEY.split(/[:]/)[1]
      }
    }
  )

/**
 *
 * @param {Object} doc _id and _rev must be provided (if uploaded)
 */
export const createMatch = doc =>
  axios.post(
    `${credentials.API_HOST}/create-document?${credentials.QUERY}`,
    {
      dbname: credentials.DB_NAME,
      doc
    },
    {
      auth: {
        username: credentials.API_KEY.split(/[:]/)[0],
        password: credentials.API_KEY.split(/[:]/)[1]
      }
    }
  )
