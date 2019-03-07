export default ({ field, form: { touched, errors }, children, ...props }) => (
  <div className="field">
    <label htmlFor={field.name} className="label">
      {props.label}
    </label>
    <div className="control">
      <select name={field.name} id={field.name} className="select">
        {children}
      </select>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  </div>
)
