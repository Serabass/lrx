import React from "react";
import {
  LRXGeneralLine,
  LRXGeneralLineEntry,
  OnEntryClickedCallback
} from "./types";
import { LRXChordLine } from "./LRXChordLine";
import { LRXLyricsLine } from "./LRXLyricsLine";

export interface LRXLineProps {
  line: LRXGeneralLine;
  onEntryClicked: OnEntryClickedCallback;
  activeEntry?: LRXGeneralLineEntry;
  timeHighlight?: boolean;
}

export function LRXLine({
  line,
  onEntryClicked = () => {},
  activeEntry,
  timeHighlight = false
}: LRXLineProps) {
  switch (line.type) {
    case "EMPTY_LINE":
      return <p />;

    case "CHORDS_LINE":
      return <LRXChordLine line={line as any} />;

    case "LINE":
      return (
        <LRXLyricsLine
          line={line}
          activeEntry={activeEntry}
          timeHighlight={timeHighlight}
          onEntryClicked={(entry) => {
            onEntryClicked(entry);
          }}
        />
      );

    default:
      return <p>UNK: {line.type}</p>;
  }
}
