import { LRXChord } from "../common/types";

export function transposeNote(note: string, amount: number) {
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
  return note.replace(/[CDEFGAB]([b#])?/g, function (match) {
    let i =
      (scale.indexOf(normalizeMap[match] ? normalizeMap[match] : match) +
        amount) %
      scale.length;
    return scale[i < 0 ? i + scale.length : i];
  });
}

export function transposeChord(chord: LRXChord, amount: number): LRXChord {
  return {
    note: transposeNote(chord.note, amount),
    space: chord.space,
    mod: chord.mod,
    suffix: chord.suffix,
    bass: chord.bass
  };
}
