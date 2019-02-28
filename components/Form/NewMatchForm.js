import { Formik, Field } from "formik"
import * as Yup from "yup"
import Modal from "../Modal"
import Input from "./Elements/Input"

// TODO: Use this schema to check date
// TODO: Must make this function
const MatchSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
  owner: Yup.string()
    .email("Must provide a valid email")
    .required("Required"),
  // date: Yup.date()
  //   .min(new Date()) // Today?
  //   .max(new Date().getDate() + 5), // following 5 days?
  time: Yup.string().required("Required")
})

/**
 * TO DO: Make this work!
 */
export default ({ isVisible, toggleModal, sendData, user }) => (
  <Modal
    title="Crear nuevo partido ⚽️"
    isVisible={isVisible}
    toggleModal={toggleModal}
  >
    <Formik
      initialValues={{
        owner: user.email
      }}
      // validationSchema={MatchSchema}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setSubmitting(true)
        if (!values.owner) {
          console.info("No email, must handle this")
          setSubmitting(false)
          return
        }
        sendData(values)
          .then(() => {
            setSubmitting(false)
          })
          .catch(err => {
            setSubmitting(false)
            setStatus({ msg: err.message })
          })
      }}
    >
      {({ status, setStatus, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="title"
            label="Título"
            required
            type="text"
            placeholder="Título"
            component={Input}
          />
          <Field
            name="owner"
            label="Creador(a)"
            required
            type="email"
            placeholder="Owner email"
            component={Input}
            disabled
          />
          <Field
            name="date"
            label="Fecha"
            required
            type="date"
            placeholder="Reservation date and time"
            component={Input}
          />
          {/* Esto es una excepcion */}
          <div className="field">
            <label htmlFor="time" className="label">
              Hora
            </label>
            <Field name="time" className="select" component="select" required>
              <option value="">Select an option</option>
              <option value="17:00">17:00hs</option>
              <option value="18:00">18:00hs</option>
              <option value="19:00">19:00hs</option>
            </Field>
          </div>
          {status && status.msg && (
            <div className="notification is-warning">
              <button
                className="delete"
                type="button"
                onClick={() => setStatus({})}
              />
              {status.msg}
            </div>
          )}
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
