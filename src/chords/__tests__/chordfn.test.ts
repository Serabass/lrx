import { chord } from "../chord";

describe("Chord function", () => {
  it("Simple test", () => {
    expect(chord`Am`.note).toBe("A");
    expect(chord`Am`.suffix).toBe("m");
    expect(chord`Am`.mod).toBe("");
    expect(chord`Am`.bass).toBeUndefined();
  });
  it("Simple test", () => {
    expect(chord`D#`.note).toBe("D");
    expect(chord`D#`.suffix).toBe("");
    expect(chord`D#`.mod).toBe("#");
    expect(chord`D#`.bass).toBeUndefined();

    expect(chord`Am/C`.note).toBe("A");
    expect(chord`Am/C`.suffix).toBe("m");
    expect(chord`Am/C`.mod).toBe("");
    expect(chord`Am/C`.bass).toEqual({ note: "C" });

    expect(chord` Am/C   `.note).toBe("A");
    expect(chord` Am/C   `.suffix).toBe("m");
    expect(chord` Am/C   `.mod).toBe("");
    expect(chord` Am/C   `.bass).toEqual({ note: "C" });
    expect(chord` Am/C   `.space.start).toEqual(" ");
    expect(chord` Am/C   `.space.end).toEqual("   ");
  });
  it("Simple test", () => {
    expect(chord`C#`.note).toBe("C");
    expect(chord`C#`.suffix).toBe("");
    expect(chord`C#`.mod).toBe("#");
    expect(chord`C#`.bass).toBeUndefined();
  });
  it("Simple test", () => {
    expect(chord`Eb`.note).toBe("E");
    expect(chord`Eb`.suffix).toBe("");
    expect(chord`Eb`.mod).toBe("b");
    expect(chord`Eb`.bass).toBeUndefined();
  });
  it("Simple test", () => {
    expect(chord`A/D`.note).toBe("A");
    expect(chord`A/D`.suffix).toBe("");
    expect(chord`A/D`.mod).toBe("");
    expect(chord`A/D`.bass).toEqual({ note: "D" });
  });
  it("Simple test 111", () => {
    expect(chord`Dm7/C`.note).toBe("D");
    expect(chord`Dm7/C`.suffix).toBe("m7");
    expect(chord`Dm7/C`.mod).toBe("");
    expect(chord`Dm7/C`.bass).toEqual({ note: "C" });
    expect(chord`Dm7/C`.space.start).toBe("");
    expect(chord`Dm7/C`.space.end).toBe("");
  });
});
