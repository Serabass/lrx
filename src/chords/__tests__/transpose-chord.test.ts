import { transposeChord } from "../transpose-chord";

describe("transposeChord function", () => {
  it("Simple test", () => {
    expect(transposeChord("Cm", 1)).toBe("C#m");
    expect(transposeChord("F#m", -4)).toBe("Dm");
    expect(transposeChord("Cm", -3)).toBe("Am");
    expect(transposeChord("G", 2)).toBe("A");
    expect(transposeChord("D#", -3)).toBe("C");
    expect(transposeChord("Am/C", 2)).toBe("Bm/D");
  });
});
