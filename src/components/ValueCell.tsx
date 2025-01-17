import { sortOrderAscending } from "../types/StandingsTypes";

const parseCellValue = (value: string) => {
  const parsedComma = value?.replace(",", "."); // Handle comma
  const parsedNegativeValue = parsedComma?.replace(/[−]/g, "-"); // Handle minus signs

  const isNumber = !isNaN(parseFloat(parsedNegativeValue));
  if (isNumber) return parseFloat(parsedNegativeValue);
  return parsedNegativeValue;
};

const ValueCell = ({
  row,
  rows,
  header,
  index,
}: {
  row: Partial<Record<string, string>>;
  rows: Partial<Record<string, string>>[];
  header: string;
  index: number;
}) => {
  const value = row[header];

  if (!value) return;
  const parsedValue = parseCellValue(value);
  const isNumber = typeof parsedValue === "number";

  let backgroundColor = "transparent";
  if (isNumber) {
    const values = rows
      .map((r) => {
        const val = r[header];
        if (!val) return 0;
        const parsedVal = parseCellValue(val);
        if (typeof parsedVal === "string") return 0;
        return parsedVal;
      })
      .filter((v) => !isNaN(v));
    const max = sortOrderAscending[header as keyof typeof sortOrderAscending]
      ? Math.min(...values)
      : Math.max(...values);
    const min = sortOrderAscending[header as keyof typeof sortOrderAscending]
      ? Math.max(...values)
      : Math.min(...values);
    const range = max - min;

    const normalizedValue = range === 0 ? 1 : (parsedValue - min) / range;
    const hue = normalizedValue * 120; // 0 = red, 120 = green
    backgroundColor = `hsl(${hue}, 75%, 75%)`;
  }

  return (
    <td
      key={index}
      style={{
        backgroundColor,
        color: backgroundColor === "transparent" ? "white" : "black",
      }}
    >
      {parsedValue}
    </td>
  );
};
export default ValueCell;
