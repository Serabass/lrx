import React from "react";
import {
  LRXLine,
  LRXGeneralLineEntry,
  OnEntryClickedCallback,
  LRXGeneralLine,
  LRXChordsLine
} from "../common/types";
import { LRXChordLine } from "./LRXChordLine";
import { LRXLyricsLine } from "./LRXLyricsLine";

export interface LRXLineProps {
  line: LRXLine;
  onEntryClicked: OnEntryClickedCallback;
  activeEntry?: LRXGeneralLineEntry;
  timeHighlight?: boolean;
  currentTime?: number;
  transpose?: number;
}

export function LRXLine({
  line,
  onEntryClicked = () => {},
  activeEntry,
  timeHighlight = false,
  transpose = 0,
  currentTime = 0
}: LRXLineProps) {
  switch (line.type) {
    case "EMPTY_LINE":
      return <p />;

    case "CHORDS_LINE":
      return (
        <LRXChordLine line={line as LRXChordsLine} transpose={transpose} />
      );

    case "LINE":
      return (
        <LRXLyricsLine
          line={line as LRXGeneralLine}
          activeEntry={activeEntry}
          timeHighlight={timeHighlight}
          currentTime={currentTime}
          onEntryClicked={(entry) => {
            onEntryClicked(entry);
          }}
        />
      );

    default:
      return <p>UNK: {line.type}</p>;
  }
}
