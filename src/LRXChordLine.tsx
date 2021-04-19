import React from "react";
import { LRXChordsLine } from "./types";

export interface LRXChordLineProps {
  line: LRXChordsLine;
  transpose?: number;
}

export function LRXChordLine({ line, transpose = 0 }: LRXChordLineProps) {
  return (
    <p className="lrx-chords-line">
      {line.chords.map((chord, i) => {
        let chordName = `${chord.note}${chord.mod || ""}${chord.suffix || ""}`;
        return (
          <span key={i}>
            {chord.space.start}
            <span className="chord-entry">{chordName}</span>
            {chord.space.end}
          </span>
        );
      })}
    </p>
  );
}
