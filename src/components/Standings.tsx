import { useEffect, useState } from "react";
import { useSpreadsheetContext } from "../contexts/UseSpreadsheetContext";
import useSheet from "../helpers/UseSheet";
import Rows from "./Rows";
import { Categories, sortOrderAscending } from "../types/StandingsTypes";

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
    setAscending(sortOrderAscending[sortAttribute]);
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
      <Rows rows={rows} headers={headers} />
    </table>
  );
};
export default Standings;
