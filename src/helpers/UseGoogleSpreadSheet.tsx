import { GoogleSpreadsheet } from "google-spreadsheet";
import { useCallback, useEffect, useState } from "react";

const useGoogleSpreadSheet = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rows, setRows] = useState<Partial<Record<string, any>>[]>();
  const [headers, setHeaders] = useState<string[]>([]);
  const get = useCallback(async () => {
    const doc = new GoogleSpreadsheet(
      import.meta.env.VITE_DOCUMENT_KEY as string,
      {
        apiKey: import.meta.env.VITE_API_KEY as string,
      },
    );
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet =
      doc?.sheetsById[Number(import.meta.env.VITE_SHEET_OVERVIEW_ID)];
    const unParsedRows = await sheet?.getRows();
    setHeaders(unParsedRows[0]._worksheet.headerValues);
    const parsedRows = unParsedRows.map((row) => row.toObject());
    setRows(parsedRows);
  }, []);
  useEffect(() => {
    get();
  }, [get]);

  return { rows, headers };
};

export default useGoogleSpreadSheet;
