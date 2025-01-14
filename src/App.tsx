import "./App.css";
import useGoogleSpreadSheet from "./helpers/UseGoogleSpreadSheet";

function App() {
  // const url =
  //   "https://docs.google.com/spreadsheets/d/1sFUrq2dZUQL3kleHurR7N6wRcLMthRVH0Fb1XqnIfto/edit?gid=178856272#gid=178856272";
  // const { data, loading, error } = useGet(url);
  // console.log(data, loading, error);
  const { rows, headers } = useGoogleSpreadSheet();

  console.log(headers, rows);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
