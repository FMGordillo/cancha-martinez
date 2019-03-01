import { Component } from "react"
import { atob } from "isomorphic-base64"
import { parse, isValid } from "date-fns"

import Layout from "../components/Layout"
import Calendar from "../components/Calendar"
import { Matches } from "../components/Match"
import SendMailForm from "../components/Form/SendMail"
import NewMatchForm from "../components/Form/NewMatchForm"

import "../components/calendar.styl"

import {
  getMatches,
  createMatch,
  getMatchByDate,
  sendConsultingEmail
} from "../lib"
import { DEFAULT_USER } from "../lib/constants"

class Home extends Component {
  static async getInitialProps({ req: { cookies } }) {
    const { token } = cookies
    const user = !token ? DEFAULT_USER : JSON.parse(atob(token.split(".")[1]))
    try {
      const {
        payload: { data }
      } = await getMatches()
      return {
        user,
        matches: data.docs
      }
    } catch (error) {
      return {
        user,
        matches: []
      }
    }
  }
  state = {
    matches: this.props.matches,
    currentTime: new Date(),
    formVisible: false,
    sendMailVisible: false,
    loading: true
  }

  toggleFormModal = () => {
    this.setState(({ formVisible }) => ({ formVisible: !formVisible }))
  }
  toggleSendMailModal = () => {
    this.setState(({ sendMailVisible }) => ({
      sendMailVisible: !sendMailVisible
    }))
  }

  updateMatches = async () => {
    try {
      this.setState({ isLoading: true })
      const {
        payload: { data }
      } = await getMatches()
      this.setState({ matches: data.docs, isLoading: false })
    } catch (error) {
      console.error("error componentDidMount()", error)
      this.setState({ isLoading: false })
    }
  }

  sendMatch = async ({ title, owner, date, time }) => {
    const reservation_date = parse(`${date} ${time}`)
    const {
      payload: { data: similarMatch }
    } = await getMatchByDate(reservation_date)
    if (!isValid(reservation_date)) {
      throw new Error(
        "Fecha no válida. Comuníquese en 'Consulta' para asistirte."
      )
    }
    if (similarMatch.docs.length > 0) {
      throw new Error(
        "La fecha y hora especificada ya está reservada. Intentá con otra fecha y hora."
      )
    }
    const data = {
      title: title,
      owner: owner,
      reservation_date,
      end_reservation_date: reservation_date
    }

    createMatch(data)
      .then(() => {
        this.toggleFormModal()
        this.updateMatches()
      })
      .catch(error => {
        throw error
      })
  }

  sendEmail = async data => {
    try {
      const result = await sendConsultingEmail(this.props.user.email, data)
      this.toggleSendMailModal()
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  render() {
    const {
      matches,
      formVisible,
      sendMailVisible,
      loading: isLoading
    } = this.state
    const { user } = this.props
    return (
      <Layout user={user} toggleHelpModal={this.toggleSendMailModal}>
        <h1 className="title">Cancha Martinez</h1>
        <button
          className="button is-primary"
          style={{ marginBottom: 12 }}
          onClick={this.toggleFormModal}
        >
          Crear nuevo partido ⚽️
        </button>

        <hr />

        <Calendar
          matches={matches}
          updateMatches={this.updateMatches}
          loading={isLoading}
        />

        <hr />

        <Matches matches={matches} isLoading={isLoading} />

        {/* Forms */}
        <NewMatchForm
          user={user}
          isVisible={formVisible}
          toggleModal={this.toggleFormModal}
          handleFormSubmit={this.sendMatch}
        />
        <SendMailForm
          isVisible={sendMailVisible}
          toggleModal={this.toggleSendMailModal}
          handleFormSubmit={this.sendEmail}
        />
      </Layout>
    )
  }
}

export default Home
