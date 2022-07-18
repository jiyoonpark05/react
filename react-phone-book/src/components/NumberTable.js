const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
};

const NumberTable = (props) => {
  const sortedData = props.userData.sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );
  const userData =
    sortedData.length > 0 ? (
      sortedData.map((data, idx) => (
        <tr key={idx}>
          <td style={style.tableCell}>{data.firstName}</td>
          <td style={style.tableCell}>{data.lastName}</td>
          <td style={style.tableCell}>{data.phoneNumber}</td>
        </tr>
      ))
    ) : (
      <tr clospan={3}>&nbsp;</tr>
    );

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>{userData}</tbody>
    </table>
  );
};

export default NumberTable;
