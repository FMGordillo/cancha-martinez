import { Component } from "react"
import Header from "./Header"
import Days from "./Days"
import Cells from "./Cells"
import dateFns from "date-fns"

export class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    today: new Date()
  }

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
    const { currentMonth, today } = this.state
    return (
      <div className="calendar">
        <Header
          prevMonth={this.prevMonth}
          currentMonth={currentMonth}
          nextMonth={this.nextMonth}
        />
        <Days currentMonth={currentMonth} />
        <Cells
          matches={this.props.matches}
          currentMonth={currentMonth}
          selectedDate={today}
          handleClick={this.props.handleClick}
        />
      </div>
    )
  }
}
