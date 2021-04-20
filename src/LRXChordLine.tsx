import React from "react";
import { LRXChordsLine } from "./types";
import { transposeChord } from "./transpose-chord";

export interface LRXChordLineProps {
  line: LRXChordsLine;
  transpose?: number;
}

export function LRXChordLine({ line, transpose = 0 }: LRXChordLineProps) {
  return (
    <p className="lrx-chords-line">
      {line.chords.map((chord, i) => {
        let chordName = `${chord.note}${chord.mod || ""}${chord.suffix || ""}`;
        chordName = transposeChord(chordName, transpose);
        return (
          <span key={i}>
            {chord.space.start}
            <span className="chord-entry">
              {chordName}
              {chord.bass ? (
                <span>/{transposeChord(chord.bass.note, transpose)}</span>
              ) : null}
            </span>
            {chord.space.end}
          </span>
        );
      })}
    </p>
  );
}
