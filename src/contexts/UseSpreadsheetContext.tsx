import { GoogleSpreadsheet } from "google-spreadsheet";
import { createContext, useContext, ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SpreadsheetContext = createContext<{
  spreadsheet?: GoogleSpreadsheet;
}>({
  spreadsheet: undefined,
});

export const SpreadsheetProvider = ({
  children,
  spreadsheet,
}: {
  children: ReactNode;
  spreadsheet: GoogleSpreadsheet;
}) => {
  return (
    <SpreadsheetContext.Provider value={{ spreadsheet }}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSpreadsheetContext = () => useContext(SpreadsheetContext);
