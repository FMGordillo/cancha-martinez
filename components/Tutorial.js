import { Component } from "react"
import Joyride, { STATUS } from "react-joyride"

export default class extends Component {
  state = {
    run: true,
    steps: [
      {
        target: "#title",
        content:
          "¡Hola! Te damos un paseo por la aplicación, para que saques el mayor provecho de la misma"
      },
      {
        target: "#create-match",
        content:
          "NOTA: Sólo vas a poder reservar la cancha si la fecha y hora seleccionadas están disponibles"
      },
      {
        target: "#title",
        content: "Podés repetir este tutorial cuando quieras. ¡Disfrutá!"
      }
    ]
  }

  // TODO: Reset tutorial when finished. NOT working right now
  handleTutorialCallback = data => {
    const { action, status, type } = data
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      this.setState({ run: true })
    }
  }

  render() {
    const locale = {
      skip: "Saltear",
      back: "Anterior",
      next: "Siguiente",
      last: "Finalizar"
    }
    const { run, steps } = this.state
    return (
      <Joyride
        continuous
        showProgress
        run={run}
        steps={steps}
        locale={locale}
        callback={this.handleTutorialCallback}
      />
    )
  }
}
