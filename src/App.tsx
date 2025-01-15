import "./App.css";
import useSpreadsheet from "./helpers/UseSpreadsheet";
import { SpreadsheetProvider } from "./contexts/UseSpreadsheetContext";
import Standings from "./components/Standings";

const App = () => {
  const spreadsheet = useSpreadsheet();

  if (!spreadsheet) return <>No spreadsheet found!</>;
  return (
    <SpreadsheetProvider spreadsheet={spreadsheet}>
      <Standings />
    </SpreadsheetProvider>
  );
};

export default App;
