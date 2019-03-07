import { makeAPICall, CONSULT_REASONS } from "./constants"

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
  "famargor@ar.ibm.com"

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
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .item {
        flex: 1;
        padding: 12px;
        min-height: 100px;
        width: 480px;
      }
      header {
        background-color: #ccc;
        text-align: center;
      }
      table {
        padding-left: 20px;
      }
      table th {
        text-align: left;
      }
      main {
        background-color: hsl(160, 34%, 95%);
      }
      footer {
        background-color: #ccc;
      }
    </style>
  </head>
  <body class="content">
    <header class="item">
      <h1>Cancha Martinez - Consulta</h1>
    </header>
    <main class="item">
      <h2>Datos:</h2>
      <table>
        <tr>
          <th>Usuario</th>
          <td>${from}</td>
        </tr>
        <tr>
          <th>Razón de la consulta</th>
          <td>${CONSULT_REASONS[data.reason]}</td>
        </tr>
        <tr>
          <th>Horario</th>
          <td>${new Date()}</td>
        </tr>
      </table>

      <h2>Consulta:</h2>
      <blockquote>${data.text}</blockquote>
    </main>
    <footer class="item" style="text-align: center;">
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

  return makeAPICall(
    `${API_HOST}/sendMail?${blockingApi}`,
    {
      to: support,
      subject,
      text,
      html
    },
    API_KEY
  )
}
