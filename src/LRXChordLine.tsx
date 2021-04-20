import React from "react";
import { LRXChordsLine } from "./types";

export interface LRXChordLineProps {
  line: LRXChordsLine;
  transpose?: number;
}

function transposeChord(chord: string, amount: number) {
  // https://stackoverflow.com/a/45979883/2468733
  let scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let normalizeMap: any = {
    Cb: "B",
    Db: "C#",
    Eb: "D#",
    Fb: "E",
    Gb: "F#",
    Ab: "G#",
    Bb: "A#",
    "E#": "F",
    "B#": "C"
  };
  return chord.replace(/[CDEFGAB](b|#)?/g, function (match) {
    let i =
      (scale.indexOf(normalizeMap[match] ? normalizeMap[match] : match) +
        amount) %
      scale.length;
    return scale[i < 0 ? i + scale.length : i];
  });
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
