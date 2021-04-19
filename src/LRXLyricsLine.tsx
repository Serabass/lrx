import React from "react";
import { LRXGeneralLine, OnEntryClickedCallback } from "./types";

export interface LRXLyricsLineProps {
  line: LRXGeneralLine;
  onEntryClicked: OnEntryClickedCallback;
}

export function LRXLyricsLine({
  line,
  onEntryClicked = () => {}
}: LRXLyricsLineProps) {
  return (
    <p className="lrx-lyrics-line">
      {line.content.map((entry, i) => (
        <span
          key={i}
          className="lrx-lyrics-line-entry"
          onClick={() => {
            onEntryClicked(entry);
          }}
        >
          {entry.content}&nbsp;
        </span>
      ))}
      <sup>{line.avgRate}</sup>
    </p>
  );
}
