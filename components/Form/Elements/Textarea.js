export default ({ field, form: { touched, errors }, validate, ...props }) => {
  return (
    <div className="field">
      <label htmlFor={field.name} className="label">
        {props.label}
      </label>
      <div className="control">
        <textarea
          id={field.name}
          className="textarea"
          rows={4}
          {...field}
          {...props}
        />
        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </div>
    </div>
  )
}
