import { makeAPICall } from "./constants";

const blockingApi = "blocking=true&result=true";

const API_HOST =
  "https://us-south.functions.cloud.ibm.com/api/v1/namespaces/famargor%40ar.ibm.com_dev/actions";
const API_KEY =
  "b3ab8497-1978-4650-84f1-a2ba04d3df64:aaCmv0CmAR8DlbuwduXkRLgo8uSQXcOvhrMitpnGtVDPWZ4vqI1JQohmCOveZo07";

// TODO: Finish this

/**
 * @returns {Object}
 */
export const sendMail = from =>
  makeAPICall(
    `${API_HOST}/sendMail?${blockingApi}`,
    {
      from,
      to
    },
    API_KEY
  );
