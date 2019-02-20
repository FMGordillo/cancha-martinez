import { Component } from "react"
import { atob } from "isomorphic-base64"
import { parse, isValid } from "date-fns"

import Layout from "../components/Layout"
import Calendar from "../components/Calendar"
import { Matches } from "../components/Match"
import SendMailForm from "../components/Form/SendMail"
import NewMatchForm from "../components/Form/NewMatchForm"

import "../components/calendar.styl"

import { getMatches, createMatch } from "../lib/cloudant"
import { DEFAULT_USER } from "../lib/constants"

class Home extends Component {
  static async getInitialProps({ req: { cookies } }) {
    const { token } = cookies
    const { data } = await getMatches()
    let user = {}
    if (token) {
      user = JSON.parse(atob(token.split(".")[1]))
    } else {
      user = DEFAULT_USER
    }
    return {
      user,
      matches: data.docs
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
      const { data } = await getMatches()
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
    try {
      const reservation_date = parse(`${date} ${time}`)
      if (!isValid(reservation_date)) {
        this.toggleFormModal()
        return
      }

      const data = {
        title: title,
        owner: owner,
        reservation_date,
        end_reservation_date: reservation_date
      }

      console.log("final data to submit", data)
      // TODO: Create handler for errors
      await createMatch(data)
      this.toggleFormModal()
      this.updateMatches()
    } catch (error) {
      console.log("error", error)
    }
  }

  render() {
    const { matches, formVisible, sendMailVisible, isLoading } = this.state
    const { user } = this.props
    // console.log(matches, this.props.matches)
    return (
      <Layout user={user}>
        <h1 className="title">Cancha Martinez</h1>
        <button
          className="button is-info"
          style={{ marginBottom: 12 }}
          onClick={this.toggleFormModal}
        >
          Crear nuevo partido ⚽️
        </button>

        <hr />

        <Calendar matches={matches} />

        <hr />

        <Matches
          matches={matches}
          // currentTime={currentTime}
          isLoading={isLoading}
        />

        {/* Forms */}
        <NewMatchForm
          user={user}
          isVisible={formVisible}
          toggleModal={this.toggleFormModal}
          sendData={this.handleSubmit}
        />
        {/* <SendMailForm
          isVisible={sendMailVisible}
          toggleModal={this.toggleSendMailModal}
        /> */}
      </Layout>
    )
  }
}

export default Home
