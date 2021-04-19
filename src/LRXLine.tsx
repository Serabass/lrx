import React from "react";
import { LRXGeneralLine, OnEntryClickedCallback } from "./types";
import { LRXChordLine } from "./LRXChordLine";
import { LRXLyricsLine } from "./LRXLyricsLine";

export function LRXLine({
  line,
  onEntryClicked = () => {}
}: {
  line: LRXGeneralLine;
  onEntryClicked: OnEntryClickedCallback;
}) {
  switch (line.type) {
    case "EMPTY_LINE":
      return <p />;

    case "CHORDS_LINE":
      return <LRXChordLine line={line as any} />;

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
