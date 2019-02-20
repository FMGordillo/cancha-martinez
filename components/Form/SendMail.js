import { Formik, Field } from "formik"
import Modal from "../Modal"

const mails = ["mgarone@ar.ibm.com", "baezad@ar.ibm.com"]

const SendMail = ({ isVisible, toggleModal }) => {
  return (
    <Modal isVisible={isVisible} toggleModal={toggleModal}>
      <span>Hello :v</span>
    </Modal>
  )
}

export default SendMail
