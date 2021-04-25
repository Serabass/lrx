export type X = "x";

export const x: X = "x";

export type Fingers = [number, number | X][] | string;

interface Barre {
  fromString: number;
  toString: number;
  fret: number;
}

interface ChordInfo {
  fingers: Fingers;
  barres: Barre[];
  position: number;
}

type Chords = { [name: string]: (ChordInfo | string)[] };

const Majors: Chords = {
  A: ["02220x [] at 1"],
  "A#": [
    {
      fingers: "01220x",
      barres: [
        {
          fromString: 5,
          toString: 1,
          fret: 1
        }
      ],
      position: 1
    }
  ],
  B: ["244422 [6-1@2] at 1"],
  C: ["01023x [] at 1", "355533 [6-1@3] at 1"],
  "C#": ["23442x [5-1@2] at 1"],
  D: ["2320xx [] at 1", "567755 [6-1@5] at 3"],
  "D#": ["688866 [6-1@6] at 4"],
  E: ["001220 [] at 1"],
  F: ["112331 [6-1@1] at 1"],
  "F#": ["223442 [6-1@2] at 1"],
  G: ["300023 [] at 1", "334553 [6-1@3] at 1"],
  "G#": ["223442 [6-1@4] at 2"]
};

const minors: Chords = {
  Am: ["01220x [] at 1", "555775 [] at 1"],
  "A#m": ["12331x [] at 1"],
  Bm: ["23442x [5-1@2] at 1"],
  Cm: ["345533 [] at 1"],
  "C#m": ["456644 [6-1@4] at 1"],
  Dm: ["1320xx [] at 1"],
  "D#m": ["678866 [6-1@6] at 1"],
  Em: ["000220 [] at 1"],
  Fm: ["111331 [] at 1"],
  "F#m": ["222442 [6-1@2] at 1"],
  Gm: ["333553 [6-1@3] at 1"],
  "G#m": ["444664 [6-1@4] at 1"]
};

const sevenths: Chords = {
  A7: ["02020x [] at 1"],
  "A#7": ["13131x [] at 1"],
  B7: ["20212x [] at 1"],
  C7: ["35353x [5-1@3] at 1"],
  "C#7": ["24242x [5-1@2] at 3"],
  D7: ["2120xx [] at 1"],
  "D#7": ["686866 [6-1@6] at 4"],
  E7: ["001020 [] at 1"],
  F7: ["112131 [6-1@1] at 1"],
  "F#7": ["223242 [6-1@2] at 1"],
  G7: ["10023 [] at 1"],
  "G#7": ["223242 [] at 1"],
  Dm7: ["1120xx [] at 1"]
};

const sixths: Chords = {
  Dm6: ["0320xx [] at 1"],
  Em6: ["3242xx [] at 1"],
  "C#m6": ["42324 [] at 1"],
  "D#m6": ["2131xx [] at 1"]
};

const augs: Chords = {
  Eaug: ["xx2110 [] at 1"],
  Faug: ["x2234x [] at 2"],
  "F#aug": ["x7789x [] at 1"],
  Gaug: ["xx0123 [] at 1"]
};

export const chords: Chords = {
  ...Majors,
  ...minors,
  ...sevenths,
  ...sixths,
  ...augs
};
