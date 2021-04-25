import { Barre, Finger } from "svguitar";
import { x } from "./chords";

export interface Chord {
  fingers: Finger[];
  barres: Barre[];
  position: number;
}

export function parseChord(input: string): Chord {
  let [_fingers, _barres, , _position] = input.split(/\s+/);
  let position = parseInt(_position);
  return {
    fingers: _fingers
      .split("")
      .map((n, i) => [
        i + 1,
        n === x ? n : parseInt(n) + (position === 1 ? 0 : position)
      ]),
    barres: ((input) => {
      let match = input.match(/\[([\d@,-]*)]/);
      if (!match) {
        throw new Error("unknown format");
      }
      let [, data] = [...match].filter((e) => !!e);

      if (!data) {
        return [];
      }

      return data.split(/\s*,\s*/).map((chunk) => {
        let match = chunk.match(/^(\d+)-(\d+)@(\d+)$/);
        if (!match) {
          throw new Error("unknown format");
        }
        let [, fromString, toString, fret] = match.map((i) => parseInt(i));
        return { fromString, toString, fret };
      });
    })(_barres),
    position
  };
}
