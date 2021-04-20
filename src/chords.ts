type X = "x";

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

type Chords = { [name: string]: ChordInfo[] };

const Majors: Chords = {
  A: [
    {
      fingers: "02220x",
      barres: [],
      position: 1
    }
  ],
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
  B: [
    {
      fingers: "244422",
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 2
        }
      ],
      position: 1
    }
  ],
  C: [
    {
      fingers: "010230",
      barres: [],
      position: 1
    },
    {
      fingers: "355533",
      barres: [],
      position: 1
    }
  ],
  "C#": [
    {
      fingers: "23442x",
      barres: [
        {
          fromString: 5,
          toString: 1,
          fret: 2
        }
      ],
      position: 1
    }
  ],
  D: [
    {
      fingers: "2320xx",
      barres: [],
      position: 1
    },
    {
      fingers: "567755",
      barres: [],
      position: 3
    }
  ],
  "D#": [
    {
      fingers: "355533",
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 3
        }
      ],
      position: 4
    }
  ],
  E: [
    {
      fingers: "001220",
      barres: [],
      position: 1
    }
  ],
  F: [
    {
      fingers: "112331",
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 1
        }
      ],
      position: 1
    }
  ],
  "F#": [
    {
      fingers: "223442",
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 2
        }
      ],
      position: 1
    }
  ],
  G: [
    {
      fingers: "300023",
      barres: [],
      position: 1
    },
    {
      fingers: "334553",
      barres: [],
      position: 1
    }
  ],
  "G#": [
    {
      fingers: "223442",
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 2
        }
      ],
      position: 3
    }
  ]
};

const minors: Chords = {
  Am: [
    {
      fingers: "01220x",
      barres: [],
      position: 1
    }
  ],
  Bm: [
    {
      fingers: "234422",
      barres: [],
      position: 1
    }
  ],
  Cm: [
    {
      fingers: "345533",
      barres: [],
      position: 1
    }
  ],
  "C#m": [
    {
      fingers: "456644",
      barres: [],
      position: 1
    }
  ],
  Dm: [
    {
      fingers: "1320xx",
      barres: [],
      position: 1
    }
  ],
  "D#m": [
    {
      fingers: "658866",
      barres: [],
      position: 1
    }
  ],
  Em: [
    {
      fingers: "000220",
      barres: [],
      position: 1
    }
  ],
  Fm: [
    {
      fingers: "111331",
      barres: [],
      position: 1
    }
  ],
  Gm: [
    {
      fingers: "333553",
      barres: [],
      position: 1
    }
  ]
};

const sevenths: Chords = {
  A7: [
    {
      fingers: "02020x",
      barres: [],
      position: 1
    }
  ],
  "A#7": [
    {
      fingers: "13131x",
      barres: [],
      position: 1
    }
  ],
  C7: [
    {
      fingers: "35353x",
      barres: [
        {
          fromString: 5,
          toString: 1,
          fret: 3
        }
      ],
      position: 1
    }
  ],
  "C#7": [
    {
      fingers: "24242x",
      barres: [
        {
          fromString: 5,
          toString: 1,
          fret: 2
        }
      ],
      position: 3
    }
  ],
  D7: [
    {
      fingers: "2120xx",
      barres: [],
      position: 1
    }
  ],
  E7: [
    {
      fingers: "001020",
      barres: [],
      position: 1
    }
  ],
  F7: [
    {
      fingers: "112131",
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 1
        }
      ],
      position: 1
    }
  ],
  G7: [
    {
      fingers: "10023",
      barres: [],
      position: 1
    }
  ],
  "G#7": [
    {
      fingers: "223242",
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 2
        }
      ],
      position: 3
    }
  ]
};

const sixths: Chords = {
  Dm6: [
    {
      fingers: "0320xx",
      barres: [],
      position: 1
    }
  ]
};

const augs: Chords = {
  Faug: [
    {
      fingers: "x6678x",
      barres: [],
      position: 1
    }
  ]
};

export const chords: Chords = {
  ...Majors,
  ...minors,
  ...sevenths,
  ...sixths,
  ...augs
};
