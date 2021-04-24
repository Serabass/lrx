import { LRXChord, LRXChordsLine, LRXDocument } from "../common/types";

export function buildChordName(chord: LRXChord) {
  return `${chord.note}${chord.suffix ?? ""}${chord.mod ?? ""}`;
}

export function extractChords(doc: LRXDocument) {
  let res: string[] = [];
  let line = doc.blocks.reduce((a, b) => {
    return [
      ...a,
      b.body
        .filter((l) => l.type === "CHORDS_LINE")
        .map((l) =>
          (l as LRXChordsLine).chords.map(
            (chord) => `${chord.note}${chord.suffix ?? ""}${chord.mod ?? ""}`
          )
        )
    ];
  }, []);

  for (let chords of line) {
    for (let chord of chords) {
      for (let el of chord) {
        if (!res.includes(el)) {
          res.push(el);
        }
      }
    }
  }

  return res;
}
