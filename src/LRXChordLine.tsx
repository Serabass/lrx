import React from "react";
import { LRXChordsLine } from "./types";

export function LRXChordLine({ line }: { line: LRXChordsLine }) {
  return (
    <p className="lrx-chords-line">
      {line.chords.map((chord, i) => (
        <span key={i}>
          {chord.space.start}
          <span className="chord-entry">
            {chord.note}
            {chord.mod || ""}
            {chord.suffix || ""}
          </span>
          {chord.space.end}
        </span>
      ))}
    </p>
  );
}
