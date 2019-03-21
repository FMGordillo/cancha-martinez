import Modal from "./Modal"

export const NewMatchConfirmation = ({
  title = "Cancha reservada",
  isVisible,
  toggleModal
}) => (
  <Modal title={title} isVisible={isVisible} toggleModal={toggleModal}>
    <p>¡No olvides llevar tu pelota!</p>
    <div className="confirmation">
      <button className="button is-primary" onClick={toggleModal}>
        Listo
      </button>
    </div>
  </Modal>
)
