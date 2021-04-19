export interface LRXDocumentTitle {
  title: string;
}

export interface LRXGeneralLineEntryBookmark {
  n: string;
}

export interface LRXGeneralLineEntry {
  _id: number;
  bm: LRXGeneralLineEntryBookmark;
  content: string;
}

export interface Timecode {
  mm: number;
  ss: number;
  ms: number;
  value: number;
  text: string;
}

export interface LRXGeneralLine {
  type: string;
  avgRate: number;
  content: LRXGeneralLineEntry[];
  timecode?: Timecode;
}

export interface LRXDocumentBlock {
  avgRate: number;
  header: {
    title: string;
  };
  body: LRXGeneralLine[];
}

export interface LRXReportLine {
  type: "REPORT_LINE";
  n: string;
  text: string;
}

export interface LRXReport {
  lines: LRXReportLine[];
}

export interface LRXDocument {
  title: LRXDocumentTitle;
  blocks: LRXDocumentBlock[];
  report: LRXReport;
}

export interface LRXChordSpace {
  start: string;
  end: string;
}

export interface LRXChord {
  space: LRXChordSpace;
  note: string;
  mod: string;
  suffix: string;
}

export interface LRXChordsLine {
  type: "CHORDS_LINE";
  chords: LRXChord[];
}

export type OnEntryClickedCallback = (entry: LRXGeneralLineEntry) => void;
