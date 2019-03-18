import { makeAPICall, CONSULT_REASONS, DB_NAME } from "./constants"

const blockingApi = "blocking=true&result=true"
const API_HOST =
  "https://us-south.functions.cloud.ibm.com/api/v1/namespaces/famargor%40ar.ibm.com_dev/actions"
const API_KEY =
  "b3ab8497-1978-4650-84f1-a2ba04d3df64:aaCmv0CmAR8DlbuwduXkRLgo8uSQXcOvhrMitpnGtVDPWZ4vqI1JQohmCOveZo07"

const support =
  (process.env.NODE_ENV === "production" && [
    "mgarone@ar.ibm.com",
    "baezad@ar.ibm.com"
  ]) ||
  "dondebar@ar.ibm.com"

// TODO: Finish this

/**
 *
 * @param {String} from (used as a reference)
 * @param {String} to
 * @param {String} text
 */
export const sendConsultingEmail = (from, data) => {
  const { text } = data
  const subject = `Consulta`
  const html = `
  <!DOCTYPE html>
  <head>
    <title>Cancha Martinez - Consulta</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Roboto"
      rel="stylesheet"
    />

    <style>
      body {
        font-family: "IBM Plex Sans", sans-serif;
      }
    </style>
  </head>
  <body class="content" style="display: flex;flex-direction: column;align-items: center;">
    <header class="item" style="background-color: #ccc;text-align: center;flex: 1;padding: 12px;min-height: 100px;width: 480px;">
      <h1>Cancha Martinez - Consulta</h1>
    </header>
    <main class="item" style="background-color: #eef7f4;flex: 1;padding: 12px;min-height: 100px;width: 480px;">
      <h2>Datos:</h2>
      <table style="padding-left: 20px;">
        <tr>
          <th style="text-align: left;">Usuario</th>
          <td>${from}</td>
        </tr>
        <tr>
          <th style="text-align: left;">Razón de la consulta</th>
          <td>${CONSULT_REASONS[data.reason]}</td>
        </tr>
        <tr>
          <th style="text-align: left;">Horario</th>
          <td>${new Date()}</td>
        </tr>
      </table>

      <h2>Consulta:</h2>
      <blockquote>${data.text}</blockquote>
    </main>
    <footer class="item" style="background-color: #ccc;text-align: center;flex: 1;padding: 12px;min-height: 100px;width: 480px;">
      <p>
        Este email fue enviado a través de
        <a href="https://cancha-martinez.mybluemix.net/" target="_blank"
          >Cancha Martinez Tool</a
        >
        por el usuario <code>${from}</code>
      </p>
      <p>
        Ante cualquier duda sobre el formato, consulte con
        <a href="mailto:famargor@ar.ibm.com">Facundo Martin Gordillo</a>
      </p>
    </footer>
  </body>
  </html>
  `

  /**
   * NO LOGS: /sendMail
   * LOGS: /log_email_sent
   */
  return makeAPICall(
    `${API_HOST}/log_email_sent?${blockingApi}`,
    {
      to: support,
      subject,
      text,
      html,
      dbname: `log_${DB_NAME}`
    },
    API_KEY
  )
}
