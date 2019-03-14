import { Component } from "react"
import { atob } from "isomorphic-base64"
import { parse, isValid } from "date-fns"

import Layout from "../components/Layout"
import Tutorial from "../components/Tutorial"
import Calendar from "../components/Calendar"
import { Matches } from "../components/Match"
import {
  SendEmail as SendEmailForm,
  NewMatch as NewMatchForm,
  MatchesOfTheDay as MatchesForm
} from "../components/Form"

import "../components/calendar.styl"

import {
  getMatches,
  createMatch,
  deleteMatch,
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
        matches: data.docs,
        error: false
      }
    } catch (error) {
      console.log("getInitialProps() error", error)
      return {
        user,
        matches: [],
        error: true
      }
    }
  }
  state = {
    matches: this.props.matches || [],
    selectedDay: "",
    currentTime: new Date(),
    matchesOfTheDaySelected: [],
    loading: true,
    error: this.props.error || false,
    // Modals
    createMatchVisible: false,
    sendMailVisible: false,
    matchesOfTheDayVisible: false
  }

  /**
   * Create Match form
   */
  toggleFormModal = e => {
    this.setState(({ createMatchVisible: createMatchVisible }) => ({
      createMatchVisible: !createMatchVisible
    }))
  }

  /**
   * Send Mail form
   */
  toggleSendMailModal = () => {
    this.setState(({ sendMailVisible }) => ({
      sendMailVisible: !sendMailVisible
    }))
  }

  /**
   * Matches of the day + details
   */
  toggleFormModalWithParams = (e, date) => {
    if (Array.isArray(e)) {
      this.setState({ matchesOfTheDaySelected: e })
    }
    if (date) {
      this.setState({ selectedDay: date })
    }
    this.setState(({ matchesOfTheDayVisible }) => ({
      matchesOfTheDayVisible: !matchesOfTheDayVisible
    }))
  }

  /**
   * From "Matches of the Day" to "New Match"
   * TODO: Is there another name for this?
   */
  toggleFormModalFromMatches = matches => {
    if (Array.isArray(matches)) {
      this.toggleFormModalWithParams() // Turn off
      this.toggleFormModal() // Turn on
    }
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

  deleteMatch = async doc => {
    const { email } = this.props.user
    if (doc.owner === email) {
      deleteMatch(doc)
        .then(() => {
          this.toggleFormModalWithParams()
          this.updateMatches()
        })
        .catch(error => {
          throw error
        })
    } else {
      throw new Error("Este partido no te pertenece, no podés eliminarlo")
    }
  }

  sendEmail = async data => {
    try {
      const result = await sendConsultingEmail(this.props.user.email, data)
      // const result = await sendConsultingEmail("", {})
      console.log(result)
      this.toggleSendMailModal()
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  render() {
    const {
      matches,
      createMatchVisible,
      sendMailVisible,
      matchesOfTheDayVisible,
      matchesOfTheDaySelected,
      selectedDay,
      loading: isLoading
    } = this.state
    const { user } = this.props
    return (
      <Layout user={user} toggleHelpModal={this.toggleSendMailModal}>
        <h1 id="title" className="title is-1">
          Cancha Martinez
        </h1>
        <button
          id="create-match"
          className="button is-primary"
          style={{ marginBottom: 12 }}
          onClick={this.toggleFormModal}
        >
          Crear nuevo partido ⚽️
        </button>

        <Tutorial />

        <hr />
        <h2 className="title">Calendario de partidos</h2>
        <Calendar
          matches={matches}
          updateMatches={this.updateMatches}
          loading={isLoading}
          handleClick={this.toggleFormModalWithParams}
        />

        <hr />
        <h2 className="title">Tabla de partidos</h2>
        <Matches matches={matches} isLoading={isLoading} />

        {/* Forms */}
        <NewMatchForm
          user={user}
          isVisible={createMatchVisible}
          toggleModal={this.toggleFormModal}
          handleFormSubmit={this.sendMatch}
          selectedDay={selectedDay}
        />
        <SendEmailForm
          isVisible={sendMailVisible}
          toggleModal={this.toggleSendMailModal}
          handleFormSubmit={this.sendEmail}
        />
        <MatchesForm
          user={user}
          matches={matchesOfTheDaySelected}
          isVisible={matchesOfTheDayVisible}
          toggleModalForm={this.toggleFormModalFromMatches}
          toggleModal={this.toggleFormModalWithParams}
          handleFormSubmit={this.sendEmail}
          deleteMatch={this.deleteMatch}
        />
      </Layout>
    )
  }
}

export default Home
