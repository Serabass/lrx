import { transposeChord } from "../transpose-chord";
import { chord } from "../chord";

describe("transposeChord function", () => {
  it("Simple test", () => {
    expect(transposeChord(chord("Cm"), 1).note).toEqual(chord("C#m").note);
    expect(transposeChord(chord("Cm"), 2).note).toBe(chord("Dm").note);
    expect(transposeChord(chord("G"), 2).note).toBe(chord("A").note);
  });
});
