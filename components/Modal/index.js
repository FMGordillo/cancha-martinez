// TODO: Finish of polishing this
import "../style.styl"
export default ({ isVisible, toggleModal, children }) => (
  <div className={`modal ${(isVisible && "is-active") || "is-inactive"}`}>
    <div className="modal-background" onClick={toggleModal} />
    <div className="modal-content">
      {children}
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={toggleModal}
      />
    </div>
  </div>
)
