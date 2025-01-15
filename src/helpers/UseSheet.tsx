import { GoogleSpreadsheet } from "google-spreadsheet";
import { useCallback, useEffect, useState } from "react";

const useSheet = (spreadsheet?: GoogleSpreadsheet) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rows, setRows] = useState<Partial<Record<string, any>>[]>();
  const [headers, setHeaders] = useState<string[]>([]);
  const getSheet = useCallback(async () => {
    if (!spreadsheet) return;
    const sheet =
      spreadsheet?.sheetsById[Number(import.meta.env.VITE_SHEET_OVERVIEW_ID)];
    const unParsedRows = await sheet?.getRows();
    setHeaders(unParsedRows[0]._worksheet.headerValues);
    const parsedRows = unParsedRows.map((row) => row.toObject());
    setRows(parsedRows);
  }, [spreadsheet]);

  useEffect(() => {
    if (!spreadsheet) return;
    getSheet();
  }, [getSheet, spreadsheet]);

  return { rows, headers };
};

export default useSheet;
