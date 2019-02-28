import { Formik, Field } from "formik"
import Modal from "../Modal"
import Textarea from "./Elements/Textarea"

const mails = ["mgarone@ar.ibm.com", "baezad@ar.ibm.com"]

const SendMail = ({ isVisible, toggleModal }) => {
  return (
    <Modal
      title="Enviar consulta"
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="title"
              label="Título"
              required
              type="multitext"
              placeholder="Título"
              component={Textarea}
            />
            <button
              className="button is-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </Modal>
  )
}

export default SendMail
