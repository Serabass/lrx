import React from "react";

export interface LRXLyricsLineProps {
  line: any;
  onEntryClicked: any;
}

export function LRXLyricsLine({
  line,
  onEntryClicked = () => {}
}: LRXLyricsLineProps) {
  return (
    <p className="lrx-lyrics-line">
      {line.content.map((entry: any, i: number) => (
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
