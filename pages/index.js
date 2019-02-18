import axios from "axios";
import moment from "moment";
import Router from "next/router";
import { Component } from "react";
import base64 from "isomorphic-base64";

import Layout from "../components/Layout";
import { Matches } from "../components/Match";
import NewMatchForm from "../components/Form/NewMatchForm";

import { getMatches, createMatch } from "../lib/cloudant";

class Home extends Component {
  static async getInitialProps({ req: { cookies } }) {
    const { token } = cookies;
    if (token) {
      const user = JSON.parse(base64.atob(token.split(".")[1]));
      return { user };
    }
    return {
      user: {
        email: "user@mail.com",
        firstName: "user",
        fullName: "username",
        iat: 0,
        lastName: "name",
        uid: "000000000"
      }
    };
  }
  state = {
    matches: [],
    currentTime: moment(),
    formVisible: false,
    isLoading: true
  };

  async componentDidMount() {
    await this.updateMatches();
  }

  updateMatches = async () => {
    try {
      const { data } = await getMatches();
      this.setState({ matches: data.docs, isLoading: false });
    } catch (error) {
      console.error("error componentDidMount()", error);
      this.setState({ isLoading: false });
    }
  };

  toggleModal = () => {
    this.setState(({ formVisible }) => ({ formVisible: !formVisible }));
  };

  // TODO: Handle submit!
  handleSubmit = async raw_data => {
    try {
      const reservation_date = moment(raw_data.date + " " + raw_data.time);
      if (!reservation_date.isValid()) {
        this.toggleModal();
        return;
      }

      const data = {
        title: raw_data.title,
        owner: raw_data.owner,
        reservation_date
      };
      console.log("final data to submit", data);
      const matchCreated = await createMatch(data);
      this.toggleModal();
      this.updateMatches();
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    const { matches, formVisible, currentTime, isLoading } = this.state;
    const { user } = this.props;
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
    );
  }
}

export default Home;
