export interface LRXDocumentTitle {
  title: string;
}

export interface LRXGeneralLineEntryBookmarkRate {
  type: string;
  rate: number;
}

export interface LRXGeneralLineEntryBookmark {
  n: string;
  rate: LRXGeneralLineEntryBookmarkRate;
}

export interface LRXGeneralLineEntry {
  _id: number;
  bm: LRXGeneralLineEntryBookmark;
  content: string;
  line: any;
}

export interface Time {
  mm: number;
  ss: number;
  ms: number;
  value: number;
  text: string;
}

export interface Timecode {
  start: Time;
  end: Time;
}
export interface LRXLine {
  type: string;
  timecode?: Timecode;
}

export interface LRXGeneralLine extends LRXLine {
  avgRate: number;
  content: LRXGeneralLineEntry[];
}

export interface LRXDocumentBlock {
  avgRate: number;
  header: {
    title: string;
  };
  body: LRXLine[];
}

export interface LRXReportLine extends LRXLine {
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

export interface LRXChordBass {
  note: string;
}

export interface LRXChord {
  space: LRXChordSpace;
  note: string;
  mod?: string;
  bass?: LRXChordBass;
  suffix?: string;
}

export interface LRXChordsLine extends LRXLine {
  type: "CHORDS_LINE";
  chords: LRXChord[];
}

export type OnEntryClickedCallback = (entry: LRXGeneralLineEntry) => void;
