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
        target: ".calendar",
        content: (
          <div>
            <p>Podés visualizar todas las reservas existentes de la canchita</p>
          </div>
        )
      },
      {
        target: "#start-of-month",
        content: (
          <div>
            <p>
              Para más detalle de las reservas en el día seleccionado, podés
              hacer clic.
            </p>
            <p>También podés reservar haciendo clic acá</p>
            <br />
            <p>
              <strong>Nota del developer</strong>: No pude implementar un
              "auto-scroll" de la página. Te pido por favor que bajes
              manualmente para seguir el tutorial
            </p>
          </div>
        )
      },
      {
        target: ".ReactTable",
        content: (
          <div>
            <p>
              Si querés ver en más detalle las reservas, podés hacerlo en esta
              tabla.
            </p>
            <p>
              <strong>Nota del developer</strong>: Te molesto otra vez, volvé a
              subir
            </p>
          </div>
        )
      },
      {
        target: "#create-match",
        content:
          "Podés hacer clic en el día que querés reservar, o hacer clic acá y elegir el día. Es lo mismo."
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
        disableScrolling={false}
        showProgress
        run={run}
        steps={steps}
        locale={locale}
        callback={this.handleTutorialCallback}
      />
    )
  }
}
