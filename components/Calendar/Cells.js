import dateFns from "date-fns"

export default ({ matches, currentMonth, selectedDate, handleClick }) => {
  const monthStart = dateFns.startOfMonth(currentMonth)
  const monthEnd = dateFns.endOfMonth(currentMonth)
  const startDate = dateFns.startOfWeek(monthStart)
  const endDate = dateFns.endOfWeek(monthEnd)

  const compareFormat = "YYYY-MM-DD"

  const dateFormat = "D"
  const rows = []

  let days = []
  let day = startDate
  let formattedDate = ""

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const matchesFiltered = matches.filter(match => {
        const isEqual = dateFns.isEqual(
          dateFns.format(day, compareFormat),
          dateFns.format(match.reservation_date, compareFormat)
        )
        return isEqual
      })
      formattedDate = dateFns.format(day, dateFormat)
      const cloneDay = day
      days.push(
        <div
          id={(formattedDate == 1 && "start-of-month") || undefined}
          className={`col cell ${
            !dateFns.isSameMonth(day, monthStart)
              ? "disabled"
              : dateFns.isSameDay(day, selectedDate)
              ? "selected"
              : ""
          }`}
          key={day}
          onClick={() => handleClick(matchesFiltered, cloneDay)}
        >
          <span className="number-cell">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
          <div className="matches">
            {matchesFiltered.map(({ title, reservation_date }, i) => (
              <p className="match" key={i}>
                {dateFns.format(reservation_date, "HH:mm")}{" "}
                <strong>{title}</strong>
              </p>
            ))}
          </div>
        </div>
      )
      day = dateFns.addDays(day, 1)
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    )
    days = []
  }
  return <div className="body">{rows}</div>
}
