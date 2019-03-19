import { post } from "axios"
import { CONSULT_REASONS, DB_NAME } from "./constants"

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
export const sendConsultingEmail = async (from, data) => {
  const { text } = data
  const subject = `Consulta - Cancha Martinez (${from})`
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
  try {
    const payload = await post(
      `https://72b656e0.us-south.apiconnect.appdomain.cloud/cancha-martinez-api/sendMail?blocking=true&result=true`,
      {
        to: support,
        subject,
        text,
        html,
        dbname: `log_${DB_NAME}`
      },
      {
        headers: {
          "x-ibm-client-id": "76d65bcb-59ca-483b-aab1-20fea911c562",
          "x-ibm-client-secret": "5hf5mgle--5b93"
        }
      }
    )
    if (payload.data.ok)
      return {
        error: false,
        payload
      }
    else throw result
  } catch (payload) {
    return {
      error: true,
      payload
    }
  }
}
