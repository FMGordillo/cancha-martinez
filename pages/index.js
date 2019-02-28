import { Component } from "react"
import { atob } from "isomorphic-base64"
import { parse, isValid } from "date-fns"

import Layout from "../components/Layout"
import Calendar from "../components/Calendar"
import { Matches } from "../components/Match"
import SendMailForm from "../components/Form/SendMail"
import NewMatchForm from "../components/Form/NewMatchForm"

import "../components/calendar.styl"

import { getMatches, createMatch, getMatchByDate } from "../lib"
import { DEFAULT_USER } from "../lib/constants"

class Home extends Component {
  static async getInitialProps({ req: { cookies } }) {
    const { token } = cookies
    let user = {}
    if (!token) {
      user = DEFAULT_USER
    } else {
      user = JSON.parse(atob(token.split(".")[1]))
    }
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
    isLoading: true
  }

  /**
   *
   */
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

  toggleFormModal = () => {
    this.setState(({ formVisible }) => ({ formVisible: !formVisible }))
  }
  toggleSendMailModal = () => {
    this.setState(({ sendMailVisible }) => ({
      sendMailVisible: !sendMailVisible
    }))
  }

  handleSubmit = async ({ title, owner, date, time }) => {
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

    await createMatch(data)
    this.toggleFormModal()
    this.updateMatches()
  }

  render() {
    const { matches, formVisible, sendMailVisible, isLoading } = this.state
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

        <Calendar matches={matches} />

        <hr />

        <Matches matches={matches} isLoading={isLoading} />

        {/* Forms */}
        <NewMatchForm
          user={user}
          isVisible={formVisible}
          toggleModal={this.toggleFormModal}
          sendData={this.handleSubmit}
        />
        <SendMailForm
          isVisible={sendMailVisible}
          toggleModal={this.toggleSendMailModal}
        />
      </Layout>
    )
  }
}

export default Home
