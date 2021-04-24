import { chord } from "../chord";

describe("Template string chords", function () {
  it("Simple test", () => {
    expect(chord`Am`).toEqual({
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
});
