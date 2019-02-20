import { Component } from "react"
import dateFns from "date-fns"
import es from "date-fns/locale/es"

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  }

  renderHeader = () => {
    const dateFormat = "MMMM YYYY"
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            ⏪
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat, {
              locale: es
            })}
          </span>
        </div>
        <div className="col col-end">
          <div className="icon" onClick={this.nextMonth}>
            ⏩
          </div>
        </div>
      </div>
    )
  }
  renderDays = () => {
    const dateFormat = "dddd"
    const days = []

    let startDate = dateFns.startOfWeek(this.state.currentMonth)
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat, {
            locale: es
          })}
        </div>
      )
    }
    return <div className="days row">{days}</div>
  }
  renderCells = () => {
    const { matches } = this.props
    const { currentMonth, selectedDate } = this.state
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
        formattedDate = dateFns.format(day, dateFormat)
        // const cloneDay = day
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            // onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <div className="matches">
              {matches
                .filter(match => {
                  const isEqual = dateFns.isEqual(
                    dateFns.format(day, compareFormat),
                    dateFns.format(match.reservation_date, compareFormat)
                  )
                  return isEqual
                })
                .map((match, i) => (
                  <p className="match">{match.title}</p>
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

  // onDateClick = day => {}
  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    })
  }
  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    })
  }

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    )
  }
}

export default Calendar
