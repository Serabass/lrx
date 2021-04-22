import { Barre, Finger } from "svguitar";

export interface Chord {
  fingers: Finger[];
  barres: Barre[];
  position: number;
}

export function parseChord(input: string): Chord {
  let [_fingers, _barres, , _position] = input.split(/\s+/);

  return {
    fingers: _fingers
      .split("")
      .map((n, i) => [i + 1, n === "x" ? n : parseInt(n)]),
    barres: ((input) => {
      let match = input.match(/\[([\d@,-]*)\]/);
      if (!match) {
        throw new Error("unknown format");
      }
      let [, data] = [...match].filter((e) => !!e);

      if (!data) {
        return [];
      }

      let chunks = data.split(/\s*,\s*/).map((chunk) => {
        let match = chunk.match(/^(\d+)-(\d+)@(\d+)$/);
        if (!match) {
          throw new Error("unknown format");
        }
        let [, fromString, toString, fret] = match.map((i) => parseInt(i));
        return { fromString, toString, fret };
      });
      return chunks;
    })(_barres),
    position: parseInt(_position)
  };
}