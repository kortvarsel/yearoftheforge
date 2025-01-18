import { GoogleSpreadsheet } from "google-spreadsheet";
import { useCallback, useEffect, useState } from "react";

const useSpreadsheet = () => {
  const [doc, setDoc] = useState<GoogleSpreadsheet>();
  const get = useCallback(async () => {
    const doc = new GoogleSpreadsheet(
      import.meta.env.VITE_DOCUMENT_KEY as string,
      {
        apiKey: import.meta.env.VITE_API_KEY as string,
      },
    );
    console.log(
      import.meta.env.VITE_DOCUMENT_KEY,
      import.meta.env.VITE_API_KEY,
    );
    await doc.loadInfo(); // loads document properties and worksheets
    setDoc(doc);
  }, []);
  useEffect(() => {
    get();
  }, [get]);

  return doc;
};

export default useSpreadsheet;
