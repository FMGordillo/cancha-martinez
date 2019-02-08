import axios from 'axios'
import moment from "moment"
import Router from 'next/router'
import { Component } from "react"
import Layout from "../components/Layout"
import { Matches } from "../components/Match"
import NewMatchForm from "../components/Form/NewMatchForm"

import { getMatches, createMatch } from "../lib/cloudant"

class Home extends Component {
  static async getInitialProps({ res }) {
    const { user } = res.req
    
    if(res && user) {
        return { user }
    } else {
      res.writeHead(302, {
        Location: '/login'
      })
      res.end()
    }
  }
  state = {
    matches: [],
    currentTime: moment(),
    formVisible: false,
    isLoading: true
  }

  async componentDidMount() {
    try {
      const { data } = await getMatches()
      this.setState({ matches: data.docs, isLoading: false })
    } catch (error) {
      console.error("error componentDidMount()", error)
      this.setState({ isLoading: false })
    }
  }

  toggleModal = () => {
    this.setState(({ formVisible }) => ({ formVisible: !formVisible }))
  }

  // TODO: Handle submit!
  handleSubmit = async raw_data => {
    try {
      const reservation_date = moment(raw_data.date + " " + raw_data.time)
      const data = {
        title: raw_data.title,
        owner: raw_data.owner,
        reservation_date
      }
      const matchCreated = await createMatch(data)
      console.log("result from created match", matchCreated)
      this.toggleModal()
    } catch (error) {
      console.log("error", error)
    }
  }

  render() {
    const { matches, formVisible, currentTime, isLoading } = this.state
    const { user } = this.props
    return (
      <Layout user={user}>
        <h1 className="title">Cancha Martinez</h1>
        <button className="button is-info" onClick={this.toggleModal}>
          Add new game
        </button>


        <Matches
          matches={matches}
          // currentTime={currentTime}
          isLoading={isLoading}
        />

        <NewMatchForm
          user={user}
          isVisible={formVisible}
          toggleModal={this.toggleModal}
          sendData={this.handleSubmit}
        />
      </Layout>
    )
  }
}

export default Home
