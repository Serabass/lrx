import React from "react";
import { LRXChordsLine, LRXGeneralLine } from "./types";
import { LRXChordLine } from "./LRXChordLine";
import { LRXLyricsLine } from "./LRXLyricsLine";

export function LRXLine({
  line,
  onEntryClicked = () => {}
}: {
  line: LRXGeneralLine;
  onEntryClicked: any;
}) {
  switch (line.type) {
    case "EMPTY_LINE":
      return <p />;

    case "CHORDS_LINE":
      return <LRXChordLine line={line as LRXChordsLine} />;

    case "LINE":
      return (
        <LRXLyricsLine
          line={line}
          onEntryClicked={(entry) => {
            onEntryClicked(entry);
          }}
        />
      );

    default:
      return <p>UNK: {line.type}</p>;
  }
}
