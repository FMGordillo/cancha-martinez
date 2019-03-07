// TODO: Finish of polishing this
import "../style.styl"
export default ({ title, isVisible, toggleModal, children }) => (
  <div className={`modal ${(isVisible && "is-active") || "is-inactive"}`}>
    <div className="modal-background" onClick={toggleModal} />
    <div className="modal-content">
      <div className="box">
        <h2 className="title">{title}</h2>
        {children}
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={toggleModal}
      />
    </div>
  </div>
)
