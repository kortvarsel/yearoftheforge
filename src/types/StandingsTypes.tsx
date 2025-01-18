export type Categories =
  | "Position"
  | "Draft Pos"
  | "FC-Score (Draft)"
  | "FC-Score"
  | "Budget"
  | "Released"
  | "OC-avg/slot"
  | "OC-avg/release"
  | "Released (CPK)"
  | "FC-avg/CPK-slot"
  | "Diff (draft vs final)"
  | "CPK-Points";

export const sortOrderAscending = {
  Position: true,
  "Draft Pos": true,
  "FC-Score (Draft)": false,
  "FC-Score": false,
  Budget: false,
  Released: false,
  "OC-avg/slot": false,
  "OC-avg/release": false,
  "Released (CPK)": false,
  "FC-avg/CPK-slot": false,
  "Diff (draft vs final)": false,
  "CPK-Points": false,
};
