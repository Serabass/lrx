import { transposeChord } from "../transpose-chord";
import { LRXChord } from "../../common/types";

function chord(input: string): LRXChord {
  let match = input.match(
    /([ABCDEFG])([#b]?)(m|M|[5679]|sus[24]|m7|m6|aug)(?:\/(([ABCDEFG])([#b]?)))?/
  );
  if (!match) {
    throw new Error("unknown format");
  }

  let [, note, mod, suffix, bass] = match;
  let bassObj = {
    note: bass
  };
  return {
    note,
    mod,
    suffix,
    ...(bass ? bassObj : {}),
    space: {
      start: "",
      end: ""
    }
  };
}

describe("transposeChord function", () => {
  it("Simple test", () => {
    expect(transposeChord(chord("Cm"), 1)).toEqual(chord("C#m"));
    // expect(transposeChord("F#m", -4)).toBe("Dm");
    // expect(transposeChord("Cm", -3)).toBe("Am");
    // expect(transposeChord("G", 2)).toBe("A");
    // expect(transposeChord("D#", -3)).toBe("C");
    // expect(transposeChord("Am/C", 2)).toBe("Bm/D");
  });
});
