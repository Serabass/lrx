import { chord } from "../chord";

describe("Chord function", () => {
  it("Simple test", () => {
    expect(chord("Am")).toEqual({
      note: "A",
      suffix: "m",
      mod: "",
      space: {
        start: "",
        end: ""
      },
      bass: undefined
    });
  });
  it("Simple test", () => {
    expect(chord("D#")).toEqual({
      note: "D",
      suffix: "",
      mod: "#",
      space: {
        start: "",
        end: ""
      },
      bass: undefined
    });
    expect(chord("Am/C")).toEqual({
      note: "A",
      suffix: "m",
      mod: "",
      space: {
        start: "",
        end: ""
      },
      bass: {
        note: "C"
      }
    });
    expect(chord(" Am/C   ")).toEqual({
      note: "A",
      suffix: "m",
      mod: "",
      space: {
        start: " ",
        end: "   "
      },
      bass: {
        note: "C"
      }
    });
  });
  it("Simple test", () => {
    expect(chord("C#")).toEqual({
      note: "C",
      suffix: "",
      mod: "#",
      space: {
        start: "",
        end: ""
      },
      bass: undefined
    });
  });
  it("Simple test", () => {
    expect(chord("A/D")).toEqual({
      note: "A",
      suffix: "",
      mod: "",
      space: {
        start: "",
        end: ""
      },
      bass: {
        note: "D"
      }
    });
  });
  it("Simple test 111", () => {
    expect(chord("Dm7/C")).toEqual({
      note: "D",
      suffix: "m7",
      mod: "",
      space: {
        start: "",
        end: ""
      },
      bass: {
        note: "C"
      }
    });
  });
});
