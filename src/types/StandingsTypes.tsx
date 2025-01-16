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
  Position: false,
  "Draft Pos": false,
  "FC-Score (Draft)": true,
  "FC-Score": true,
  Budget: true,
  Released: true,
  "OC-avg/slot": true,
  "OC-avg/release": true,
  "Released (CPK)": true,
  "FC-avg/CPK-slot": true,
  "Diff (draft vs final)": true,
  "CPK-Points": true,
};
