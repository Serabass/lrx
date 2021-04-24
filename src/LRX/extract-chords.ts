import { LRXChord, LRXChordsLine, LRXDocument, LRXLine } from "../common/types";

export function buildChordName(chord: LRXChord) {
  return `${chord.note}${chord.suffix ?? ""}${chord.mod ?? ""}`;
}

export function extractChords(doc: LRXDocument) {
  let res: string[] = [];
  let line = doc.blocks
    .reduce<string[][]>((a, b) => {
      let map = b.body
        .filter((l: any) => l.type === "CHORDS_LINE")
        .map((l: LRXLine) =>
          (l as LRXChordsLine).chords.map((chord) => buildChordName(chord))
        )
        .reduce((a, b) => [...a, ...b], []);
      return [...a, map];
    }, [])
    .reduce((a, b) => [...a, ...b]);

  for (let chord of line) {
    if (!res.includes(chord)) {
      res.push(chord);
    }
  }

  return res;
}
