import { LRXChord, LRXChordsLine, LRXDocument, LRXLine } from "../common/types";

export function buildChordName(chord: LRXChord) {
  return `${chord.note}${chord.mod ?? ""}${chord.suffix ?? ""}`;
}

export function extractChords(doc: LRXDocument) {
  let res: LRXChord[] = [];
  let line = doc.blocks
    .reduce<LRXChord[][]>((a, b) => {
      let map = b.body
        .filter((l: any) => l.type === "CHORDS_LINE")
        .map((l: LRXLine) => (l as LRXChordsLine).chords)
        .reduce((a, b) => [...a, ...b], []);
      return [...a, map];
    }, [])
    .reduce((a, b) => [...a, ...b]);

  function prepare(chord: LRXChord) {
    return {
      note: chord.note,
      suffix: chord.suffix,
      mod: chord.mod,
      bass: chord.bass
    };
  }

  let cb = (chord: LRXChord) => (el: LRXChord) =>
    JSON.stringify(prepare(chord)) === JSON.stringify(prepare(el));

  for (let chord of line) {
    if (!res.find(cb(chord))) {
      res.push(chord);
    }
  }

  return res;
}
