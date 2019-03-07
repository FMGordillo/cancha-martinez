export default ({ field, form: { touched, errors }, ...props }) => (
  <div className="field">
    <label htmlFor={field.name} className="label">
      {props.label}
    </label>
    <div className="control">
      <input id={field.name} className="input" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  </div>
)
