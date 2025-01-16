import { useEffect, useState } from "react";
import { useSpreadsheetContext } from "../contexts/UseSpreadsheetContext";
import useSheet from "../helpers/UseSheet";
import ValueCell from "./ValueCell";

const isOrderPriorityHighLow = {
  Position: false,
  "Draft Pos": false,
  "FC-Score (Draft)": true,
  "FC-Score": true,
  Budget: true,
  Released: true,
  "OC-avg/slot": true,
  "OC-avg/release": true,
  "Released (CPK)": true,
  "FC-avg/CPK-slot": true,
  "Diff (draft vs final)": true,
  "CPK-Points": true,
};

type Categories =
  | "Position"
  | "Draft Pos"
  | "FC-Score (Draft)"
  | "FC-Score"
  | "Budget"
  | "Released"
  | "OC-avg/slot"
  | "OC-avg/release"
  | "Released (CPK)"
  | "FC-avg/CPK-slot"
  | "Diff (draft vs final)"
  | "CPK-Points";

const Standings = () => {
  const { spreadsheet } = useSpreadsheetContext();
  const { rows, headers } = useSheet(spreadsheet);
  const [ascending, setAscending] = useState(true);
  const [sortBy, setSortBy] = useState<Categories>("Position");

  const handleSort = (sortAttribute: Categories) => {
    if (sortAttribute === sortBy) {
      setAscending(!ascending);
      return;
    }
    setAscending(isOrderPriorityHighLow[sortAttribute]);
    setSortBy(sortAttribute);
  };

  useEffect(() => {
    rows?.sort((a, b) =>
      ascending ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy],
    );
  }, [rows, sortBy, ascending]);

  rows?.sort((a, b) =>
    ascending ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy],
  );

  if (!spreadsheet || !rows || !headers) return <>Sheet not found!</>;

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th onClick={() => handleSort(header as Categories)} key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, index) => (
              <ValueCell row={row} header={header} rows={rows} index={index} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Standings;
