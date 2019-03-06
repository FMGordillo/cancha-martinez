import Modal from "../Modal"
import { format } from "date-fns"
import es from "date-fns/locale/es"

export default ({ isVisible, toggleModal, matches }) => (
  <Modal
    title="Crear nuevo partido ⚽️"
    isVisible={isVisible}
    toggleModal={toggleModal}
  >
    {matches.length <= 0 ? (
      <p>No matches found 😒</p>
    ) : (
      matches.map(match => <Match data={match} />)
    )}

    <button className="button is-primary" disabled={matches.length >= 4}>
      Crear nuevo partido
    </button>
  </Modal>
)

const Match = ({ data: { title, reservation_date, owner } }) => (
  <div className="box">
    <p>
      <strong>{title}</strong> -{" "}
      {format(reservation_date, "dddd HH:00", { locale: es })}
    </p>
    <p>
      Creado por <code>{owner}</code>
    </p>
  </div>
)
