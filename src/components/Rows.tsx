import ValueCell from "./ValueCell";

const Rows = ({
  rows,
  headers,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: Partial<Record<string, any>>[];
  headers: string[];
}) => (
  <tbody>
    {rows?.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {headers.map((header, index) => (
          <ValueCell row={row} header={header} rows={rows} index={index} />
        ))}
      </tr>
    ))}
  </tbody>
);
export default Rows;
