import { Formik, Field } from "formik";
import * as Yup from "yup";
import Modal from "../Modal";

// TODO: Use this schema to check date
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
});

const Input = ({ field, form: {touched, errors}, ...props }) => {
  return (
  <div className="field">
    <label htmlFor={field.name} className="label">
      {field.name.toUpperCase()}
    </label>
    <div className="control">
      <input
        id={field.name}
        className="input"
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  </div>
)};

/**
 * TO DO: Make this work!
 */
export default ({ isVisible, toggleModal, sendData }) => (
  <Modal isVisible={isVisible} toggleModal={toggleModal}>
    <div className="box">
      <h2 className="title">Create new match</h2>
      <Formik
        // validationSchema={MatchSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          console.log("submit", values);
          sendData(values)
            .then(() => {
              // console.log("ok in form");
              setSubmitting(false);
            })
            .catch(err => {
              console.log("error inside form", err);
              setSubmitting(false);
            });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title" required type="text" placeholder="Title" component={Input} />
            <Field name="owner" required type="email" placeholder="Owner email" component={Input} />
            <Field name="date" required type="date" placeholder="Reservation date and time" component={Input} />
            <div className="select">
              <Field name="time" component="select" required>
                <option value="" selected disabled hidden>
                  Time
                </option>
                <option value="17:00">17:00hs</option>
                <option value="18:00">18:00hs</option>
                <option value="19:00">19:00hs</option>
              </Field>
            </div>
            <button className="button is-primary" type="submit" disabled={isSubmitting}>
              Send
            </button>
          </form>
        )}
      </Formik>
    </div>
  </Modal>
);
