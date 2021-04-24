import { LRXChord } from "../common/types";

export function chord(input: string | TemplateStringsArray): LRXChord {
  if (input instanceof Array) {
    input = input.join("");
  }
  let match = input.match(
    /(\s*)([ABCDEFG])([#b]?)((?:m[67]?|M|[5679]|sus[24]|aug)?)(?:\/([ABCDEFG][#b]?))?(\s*)/
  );
  if (!match) {
    throw new Error("unknown format");
  }

  let [, spaceStart, note, mod, suffix, bass, spaceEnd] = match;
  let bassObj = {
    bass: { note: bass }
  };
  return {
    note,
    mod,
    suffix,
    ...(bass ? bassObj : {}),
    space: {
      start: spaceStart,
      end: spaceEnd
    }
  };
}
