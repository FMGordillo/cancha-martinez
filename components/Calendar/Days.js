import { addDays, startOfWeek, format } from "date-fns"
import es from "date-fns/locale/es"

export default ({ currentMonth }) => {
  const dateFormat = "dddd"
  const days = []

  let startDate = startOfWeek(currentMonth)
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat, {
          locale: es
        })}
      </div>
    )
  }
  return <div className="days row">{days}</div>
}
