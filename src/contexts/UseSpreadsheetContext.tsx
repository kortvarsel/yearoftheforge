import { GoogleSpreadsheet } from "google-spreadsheet";
import { createContext, useContext, ReactNode } from "react";

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

export const useSpreadsheetContext = () => useContext(SpreadsheetContext);
