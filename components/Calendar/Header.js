import { format } from "date-fns"
import es from "date-fns/locale/es"
export default ({ prevMonth, currentMonth, nextMonth }) => {
  const dateFormat = "MMMM YYYY"
  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={prevMonth}>
          <span className="is-size-3">{"<"}</span>
        </div>
      </div>
      <div className="col col-center">
        <span>
          {format(currentMonth, dateFormat, {
            locale: es
          })}
        </span>
      </div>
      <div className="col col-end">
        <div className="icon" onClick={nextMonth}>
          <span className="is-size-3">></span>
        </div>
      </div>
    </div>
  )
}
