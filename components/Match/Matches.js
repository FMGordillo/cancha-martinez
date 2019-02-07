import moment from "moment";
// import Match from "./Match"
import ReactTable from "react-table";

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
      loading={isLoading}
      showPageJump={false}
      showPageSizeOptions={false}
      defaultSortDesc={true}
      defaultSorted={['reservation_date']}
      TableComponent={props => <Table props={props} />}
      TheadComponent={props => <Thead props={props} />}
      TbodyComponent={props => <Tbody props={props} />}
      TrGroupComponent={props => <TrGroup props={props} />}
      TrComponent={props => <Tr props={props} />}
      ThComponent={props => <Th props={props} />}
      TdComponent={props => <Td props={props} />}
      PaginationComponent={props => <PaginationComponent props={props} />}
      LoadingComponent={props => <LoadingComponent props={props} />}
      data={matches}
      columns={[
        {
          Header: "Title",
          accessor: "title"
        },
        { Header: "Owner", accessor: "owner" },
        { Header: "Reservation Date", accessor: "reservation_date" }
      ]}
      defaultPageSize={5}
    />
  </div>
);

const Table = ({ props }) => (
  <table className="table" style={{ minWidth: "100%" }}>
    {props.children}
  </table>
);
const Thead = ({ props }) => (
  <thead>
    <tr>{props.children.children}</tr>
  </thead>
);
const Tbody = ({ props }) => <tbody>{props.children}</tbody>;
const TrGroup = ({ props }) => props.children[0];
const Tr = ({ props }) => {
  // TODO: Format this
  // const rowTime = moment(props.children[2].children[0])
  // const startRange = moment("3:00pm", "h:mma")
  // const endRange = moment("5:00pm", "h:mma")

  // TODO: Check this out.
  // const isCurrent = rowTime.isBetween(startRange, endRange)
  const isCurrent = false;

  return <tr className={isCurrent ? "is-selected" : ""}>{props.children}</tr>;
};
const Th = ({ props }) => <th>{props.children}</th>;
const Td = ({ props }) => {
  // if(moment(props.children).isValid() && !!props.children ) {
  //   return <td>{moment(props.children).local().format()}</td>;
  // } else {
  return <td>{props.children}</td>;
  // }
};

// TODO: End this
const PaginationComponent = ({ props }) => {
  const {
    canPrevious,
    previousText,
    canNext,
    nextText,
    page,
    onPageChange
  } = props;
  console.log(props);
  return (
    <div className="columns">
      <div className="column" style={{ textAlign: "center" }}>
        <button
          className="button is-link"
          disabled={!canPrevious}
          onClick={() => onPageChange(page - 1)}
        >
          {previousText}
        </button>
      </div>
      <div className="column" style={{ textAlign: "center" }}>
        <span>Text</span>
      </div>
      <div className="column" style={{ textAlign: "center" }}>
        <button
          className="button is-link"
          disabled={!canNext}
          onClick={() => onPageChange(page + 1)}
        >
          {nextText}
        </button>
      </div>
    </div>
  );
};

const LoadingComponent = ({props: {loading, loadingText }}) => {
  console.log(loading, loadingText)
  if(loading) return <span>{loadingText}</span>
}
