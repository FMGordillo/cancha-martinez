import Modal from "./Modal"

export const TermsAndConditions = ({ acceptTerms, isVisible }) => (
  <Modal
    title="Términos y Condiciones"
    isVisible={isVisible}
    toggleModal={() => console.log("not implemented, TESTING")}
  >
    <p>This is just a test.</p>

    <button onClick={acceptTerms}>Acepto. Supongo...</button>
  </Modal>
)
