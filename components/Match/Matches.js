import { isValid, format } from "date-fns"
// import Match from "./Match"
import ReactTable from "react-table"

// const MatchesOld = ({ matches }) => (
//   <table className="table">
//     <thead>
//       <tr>
//         {Object.keys(matches[0])
//           .filter(val => val !== "id")
//           .map(head => (
//             <td>{head}</td>
//           ))}
//       </tr>
//     </thead>
//     <tbody>
//       {matches.map((match, i) => (
//         <Match data={match} />
//       ))}
//     </tbody>
//   </table>
// )

export const Matches = ({ matches, currentTime, isLoading }) => (
  <div>
    {/* <MatchesOld matches={matches} /> */}
    <ReactTable
      data={matches}
      loading={isLoading}
      defaultPageSize={5}
      showPageJump={false}
      defaultSortDesc={true}
      showPageSizeOptions={false}
      defaultSorted={["reservation_date"]}
      TrComponent={props => <Tr props={props} />}
      ThComponent={props => <Th props={props} />}
      TdComponent={props => <Td props={props} />}
      TableComponent={props => <Table props={props} />}
      TheadComponent={props => <Thead props={props} />}
      TbodyComponent={props => <Tbody props={props} />}
      TrGroupComponent={props => <TrGroup props={props} />}
      LoadingComponent={props => <LoadingComponent props={props} />}
      PaginationComponent={props => <PaginationComponent props={props} />}
      columns={[
        {
          Header: "Título",
          accessor: "title"
        },
        { Header: "Creador(a)", accessor: "owner" },
        { Header: "Fecha y hora", accessor: "reservation_date" }
      ]}
    />
  </div>
)

const Table = ({ props }) => (
  <table className="table" style={{ minWidth: "100%" }}>
    {props.children}
  </table>
)
const Thead = ({ props }) => {
  const { children } = props.children.props
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}
const Tbody = ({ props }) => <tbody>{props.children}</tbody>

const TrGroup = ({ props: { children } }) => {
  if (!children[0]) {
    return (
      <tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    )
  } else {
    return children[0]
  }
}
const Tr = ({ props }) => {
  const { children } = props
  // TODO: Format this
  // const rowTime = moment(props.children[2].children[0])
  // const startRange = moment("3:00pm", "h:mma")
  // const endRange = moment("5:00pm", "h:mma")

  // TODO: Check this out.
  // const isCurrent = rowTime.isBetween(startRange, endRange)
  const isCurrent = false

  return <tr className={isCurrent ? "is-selected" : ""}>{children}</tr>
}
const Th = ({ props }) => <th>{props.children}</th>
const Td = ({ props }) => {
  try {
    if (isValid(props.children) && !!props.children) {
      return <td>{format(props.children, "MMM Do, hh:mm a")}</td>
    } else {
      return <td>{props.children}</td>
    }
  } catch (error) {
    return <td>{props.children}</td>
  }
}

// TODO: End this
const PaginationComponent = ({ props }) => {
  const {
    canPrevious,
    previousText,
    canNext,
    nextText,
    page,
    pages,
    loading,
    onPageChange
  } = props
  // console.log(props);
  return (
    <div className="columns">
      <div className="column" style={{ textAlign: "right" }}>
        <button
          className="button is-primary"
          disabled={!canPrevious}
          onClick={() => onPageChange(page - 1)}
        >
          Anterior
        </button>
      </div>
      <div className="column" style={{ textAlign: "center" }}>
        {(loading && <span>Cargando...</span>) || (
          <span>{`Página ${page + 1} de ${pages}`}</span>
        )}
      </div>
      <div className="column" style={{ textAlign: "left" }}>
        <button
          className="button is-primary"
          disabled={!canNext}
          onClick={() => onPageChange(page + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

const LoadingComponent = ({ props: { loading, loadingText } }) => {
  return null
}
