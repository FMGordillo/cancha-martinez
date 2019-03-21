import { Formik, Field } from "formik"
import { CONSULT_REASONS } from "../../lib/constants"
import Modal from "../Modal"
import Textarea from "./Elements/Textarea"

export const SendEmail = ({ isVisible, toggleModal, handleFormSubmit }) => {
  return (
    <Modal
      title="Enviar consulta"
      isVisible={isVisible}
      toggleModal={toggleModal}
    >
      <Formik
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setStatus({})
          handleFormSubmit(values)
            .then(result => {
              if (!result)
                setStatus({
                  msg:
                    "Error al enviar tu consulta. Si el error persiste, enviá un mail directo a famargor@ar.ibm.com"
                })
              setSubmitting(false)
            })
            .catch(err => {
              setStatus({
                msg:
                  "Error al enviar tu consulta. Si el error persiste, enviá un mail directo a famargor@ar.ibm.com"
              })
              setSubmitting(false)
            })
        }}
      >
        {({ status, handleSubmit, isSubmitting, setStatus }) => (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="reason" className="label">
                Razón de la consulta
              </label>
              <Field
                name="reason"
                className="select"
                component="select"
                required
              >
                <option value="">Seleccione una opción</option>
                {Object.entries(CONSULT_REASONS).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </Field>
            </div>
            <Field
              required
              name="text"
              label="Consulta"
              placeholder="Escribí tu consulta acá. A mayor detalle, mejor respuesta desde nuestro lado."
              component={Textarea}
            />

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
            <div className="confirmation">
              <button
                className={`button is-primary ${isSubmitting && "is-loading"}`}
                type="submit"
                disabled={isSubmitting}
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
