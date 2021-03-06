import Modal from "../Modal"
import { VALID_TIMES } from "../../lib/constants"
import { format } from "date-fns"
import es from "date-fns/locale/es"

export const MatchesOfTheDay = ({
  user,
  matches,
  isVisible,
  toggleModal,
  toggleModalForm,
  deleteMatch
}) => (
  <Modal
    title="Crear nuevo partido ⚽️"
    isVisible={isVisible}
    toggleModal={toggleModal}
  >
    {matches.length <= 0 ? (
      <p>No matches found 😒</p>
    ) : (
      matches.map((match, i) => (
        <Match
          key={i}
          data={match}
          showDelete={user.email === match.owner}
          deleteMatch={deleteMatch}
        />
      ))
    )}

    <button
      className="button is-primary"
      disabled={matches.length >= VALID_TIMES.length}
      onClick={() => toggleModalForm(matches)}
    >
      Crear nuevo partido
    </button>
  </Modal>
)

const Match = ({ showDelete, data, deleteMatch }) => (
  <div
    className="box"
    style={{ display: "flex", justifyContent: "space-between" }}
  >
    <div>
      <p>
        <strong>{data.title}</strong> -{" "}
        {format(data.reservation_date, "dddd HH:00", { locale: es })}
      </p>
      <p>
        Creado por <code>{data.owner}</code>{" "}
      </p>
    </div>
    <p>
      {showDelete && (
        <button className="button is-danger" onClick={() => deleteMatch(data)}>
          Cancelar partido
        </button>
      )}
    </p>
  </div>
)
