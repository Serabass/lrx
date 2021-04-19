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
}

export function LRXLine({
  line,
  onEntryClicked = () => {},
  activeEntry
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
          onEntryClicked={(entry) => {
            onEntryClicked(entry);
          }}
        />
      );

    default:
      return <p>UNK: {line.type}</p>;
  }
}
