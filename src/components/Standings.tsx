import { useEffect, useState } from "react";
import { useSpreadsheetContext } from "../contexts/useSpreadsheetContext";
import useSheet from "../helpers/UseSheet";
import ValueCell from "./ValueCell";

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
  const [sortBy, setSortBy] = useState<Categories>("Position");

  const handleSort = (sortAttribute: Categories) => {
    console.log(sortAttribute);
    setSortBy(sortAttribute);
  };

  useEffect(() => {
    rows?.sort((a, b) => a[sortBy] - b[sortBy]);
  }, [rows, sortBy]);

  rows?.sort((a, b) => a[sortBy] - b[sortBy]);

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
