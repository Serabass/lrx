import pegjs from "pegjs";
import * as fs from "fs";
import * as path from "path";
import { buildChordName, extractChords } from "../extract-chords";

describe("Extract Chords", function () {
  let file = path.join(__dirname, "../../parser.pegjs");
  let grammar = fs.readFileSync(file).toString("utf-8");
  let parser = pegjs.generate(grammar);
  let source = `The song

[1 Verse]
Am Dm C E
Lyrics~1+5
B G E A
Lyrics~1+5

===

~1 .

`;

  it("buildChordName", () => {
    expect(
      buildChordName({ note: "A", mod: "m", space: { start: "", end: "" } })
    ).toBe("Am");
  });

  it("Simple extract test", () => {
    expect(1).toBe(1);
    let lrxDoc = parser.parse(source);
    expect(lrxDoc).not.toBeNull();
    let chords = extractChords(lrxDoc).map((chord) => buildChordName(chord));
    expect(chords.sort()).toEqual(["A", "Am", "B", "C", "Dm", "E", "G"]);
  });
});
