import React from "react";
import { LRXChordsLine } from "./types";

export function LRXChordLine({ line }: { line: LRXChordsLine }) {
  return (
    <p>
      {line.chords.map((chord, i: number) => (
        <span className="chord" key={i}>
          {chord.space.start}
          {chord.note}
          {chord.mod || ""}
          {chord.suffix || ""}
          {chord.space.end}
        </span>
      ))}
    </p>
  );
}
