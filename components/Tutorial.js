import { Component } from "react"
import Joyride from "react-joyride"

export default class extends Component {
  state = {
    steps: [
      {
        target: "#create-match",
        content:
          "NOTA: Sólo vas a poder reservar la cancha si la fecha y hora seleccionadas están disponibles"
      }
    ]
  }

  render() {
    const { steps } = this.state
    return <Joyride steps={steps} />
  }
}
