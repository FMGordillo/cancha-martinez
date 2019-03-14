import { makeAPICall, DB_NAME } from "./constants"

const blockingApi = "blocking=true&result=true"

const API_HOST =
  "https://openwhisk.ng.bluemix.net/api/v1/namespaces/famargor%40ar.ibm.com_dev/actions/Cloudant%20FMGordillo"
const API_KEY =
  "b3ab8497-1978-4650-84f1-a2ba04d3df64:aaCmv0CmAR8DlbuwduXkRLgo8uSQXcOvhrMitpnGtVDPWZ4vqI1JQohmCOveZo07"

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
 * @returns {Object}
 */
export const getMatches = () =>
  makeAPICall(
    `${API_HOST}/exec-query-find?${blockingApi}`,
    {
      dbname: DB_NAME,
      query: getMatchesQuery
    },
    API_KEY
  )

/**
 *
 * @param {Date} reservation_date
 * @returns {Object}
 */
export const getMatchByDate = reservation_date =>
  makeAPICall(
    `${API_HOST}/exec-query-find?${blockingApi}`,
    {
      dbname: DB_NAME,
      query: {
        ...getMatchesQuery,
        selector: {
          reservation_date
        }
      }
    },
    API_KEY
  )

/**
 *
 * @param {Object} doc _id and _rev must be provided (if uploaded)
 * @returns {Object}
 */
export const createMatch = doc =>
  makeAPICall(
    `${API_HOST}/create-document?${blockingApi}`,
    { dbname: DB_NAME, doc },
    API_KEY
  )

/**
 *
 * @param {Object} doc contains _id and _rev
 */
export const deleteMatch = ({ _id: docid, _rev: docrev }) =>
  makeAPICall(
    `${API_HOST}/delete-document?${blockingApi}`,
    { dbname: DB_NAME, docid, docrev },
    API_KEY
  )
