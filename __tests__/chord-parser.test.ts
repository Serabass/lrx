import { parseChord } from "../src/chord-parser";

const x = "x";

describe("ChordParser tests", () => {
  it("Simple tests (chord A)", () => {
    expect(parseChord("02220x [5-1@1,5-2@4] at 1").fingers).toEqual([
      [1, 0],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 0],
      [6, x]
    ]);
    expect(parseChord("02220x [5-1@1,5-2@4] at 1").barres).toEqual([
      {
        fromString: 5,
        toString: 1,
        fret: 1
      },
      {
        fromString: 5,
        toString: 2,
        fret: 4
      }
    ]);
    expect(parseChord("02220x [5-1@1,5-2@4] at 1").position).toBe(1);
  });

  it("Simple tests (chord C7)", () => {
    expect(parseChord("35353x [5-1@3] at 1").fingers).toEqual([
      [1, 3],
      [2, 5],
      [3, 3],
      [4, 5],
      [5, 3],
      [6, x]
    ]);
    expect(parseChord("35353x [5-1@3] at 1").barres).toEqual([
      {
        fromString: 5,
        toString: 1,
        fret: 3
      }
    ]);
    expect(parseChord("35353x [5-1@3] at 1").position).toBe(1);
  });
});
