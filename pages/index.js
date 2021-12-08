import { Component } from "react"
import { atob } from "isomorphic-base64"
import { parse, isValid } from "date-fns"
import moment from "moment"
import {
  Calendar,
  Layout,
  TermsAndConditions,
  Tutorial,
  NewMatchConfirmation
} from "../components"
import { getItem, setItem } from "../lib/localStorage"
import { TERMS_AND_CONDITIONS_KEY } from "../lib/constants"
import { Matches } from "../components/Match"
import {
  SendEmail as SendEmailForm,
  NewMatch as NewMatchForm,
  MatchesOfTheDay as MatchesForm
} from "../components/Form"

import classes from "../components/Calendar.module.css"

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
    termsAndConditionsVisible: false,
    createMatchVisible: false,
    createMatchNotificationVisible: false,
    sendMailVisible: false,
    matchesOfTheDayVisible: false
  }

  componentDidMount() {
    const accepted = getItem(TERMS_AND_CONDITIONS_KEY)
    if (!accepted) {
      this.toggleTermsAndConditions()
    }
    this.setState({
      loading: false
    })
  }

  /**
   * Create Match form
   */
  toggleFormModal = () => {
    this.setState(({ createMatchVisible: createMatchVisible }) => ({
      createMatchVisible: !createMatchVisible
    }))
  }

  /**
   * In conjuction with toggleFormModal()
   */
  toggleNewMatchNotification = () => {
    this.setState(({ createMatchNotificationVisible }) => ({
      createMatchNotificationVisible: !createMatchNotificationVisible
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
   * Terms and Conditions modal
   * To see more, check componentDidMount()
   */
  toggleTermsAndConditions = () => {
    this.setState(({ termsAndConditionsVisible }) => ({
      termsAndConditionsVisible: !termsAndConditionsVisible
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
    // NOTICE: date-fns does not support parsing UTC timezone, that's why it's using moment.js
    // const reservation_date = parse(`${date} ${time}`)
    const reservation_date = moment(`${date} ${time}`)
      .utc()
      .toDate()
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
        this.toggleFormModal() // Off
        this.toggleNewMatchNotification() // On
        this.updateMatches() // Update (in the background)
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
          this.toggleFormModalWithParams() // Off
          this.updateMatches() // Update
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
      if (!result.error) this.toggleSendMailModal()
      // Off
      else throw result
    } catch (error) {
      console.log("error sending mail, in index.js", error)
      throw error
    }
  }

  render() {
    const {
      matches,
      createMatchVisible,
      createMatchNotificationVisible,
      sendMailVisible,
      matchesOfTheDayVisible,
      termsAndConditionsVisible,
      matchesOfTheDaySelected,
      selectedDay,
      loading
    } = this.state
    const { user } = this.props
    return (
      <Layout user={user} toggleHelpModal={this.toggleSendMailModal}>
        {(loading && <span>Loading, please wait...</span>) || (
          <div>
            <h1 id="title" className="title is-1">
              Cancha Martínez
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
            <TermsAndConditions
              isVisible={termsAndConditionsVisible}
              acceptTerms={() => {
                setItem(TERMS_AND_CONDITIONS_KEY, true)
                this.toggleTermsAndConditions()
              }}
            />

            <hr />
            <h2 className="title">Calendario de partidos</h2>
            <Calendar
              matches={matches}
              updateMatches={this.updateMatches}
              loading={loading}
              handleClick={this.toggleFormModalWithParams}
            />

            <hr />
            <h2 className="title">Tabla de partidos</h2>
            <Matches matches={matches} isLoading={loading} />

            <NewMatchForm
              user={user}
              isVisible={createMatchVisible}
              toggleModal={this.toggleFormModal}
              handleFormSubmit={this.sendMatch}
              selectedDay={selectedDay}
            />
            <NewMatchConfirmation
              isVisible={createMatchNotificationVisible}
              toggleModal={this.toggleNewMatchNotification}
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
          </div>
        )}
      </Layout>
    )
  }
}

export default Home
