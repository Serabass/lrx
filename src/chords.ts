const x = "x";

interface ChordInfo {
  fingers: [number, number | "x"][];
  barres: {
    fromString: number;
    toString: number;
    fret: number;
  }[];
  position: number;
}

type Chords = { [name: string]: ChordInfo[] };

const Majors: Chords = {
  A: [
    {
      // 02220x
      fingers: [
        [1, 0],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 0],
        [6, x]
      ],
      barres: [],
      position: 1
    }
  ],
  "A#": [
    {
      // 13331x @1 fret1:5-1
      fingers: [
        [1, 1],
        [2, 3],
        [3, 3],
        [4, 3],
        [5, 1],
        [6, x]
      ],
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
      fingers: [
        [1, 2],
        [2, 4],
        [3, 4],
        [4, 4],
        [5, 2],
        [6, 2]
      ],
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
      fingers: [
        [1, 0],
        [2, 1],
        [3, 0],
        [4, 2],
        [5, 3],
        [6, 0]
      ],
      barres: [],
      position: 1
    },
    {
      fingers: [
        [1, 3],
        [2, 5],
        [3, 5],
        [4, 5],
        [5, 3],
        [6, 3]
      ],
      barres: [],
      position: 1
    }
  ],
  "C#": [
    {
      fingers: [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 4],
        [5, 2],
        [6, x]
      ],
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
      fingers: [
        [1, 2],
        [2, 3],
        [3, 2],
        [4, 0],
        [5, x],
        [6, x]
      ],
      barres: [],
      position: 1
    },
    {
      fingers: [
        [1, 5],
        [2, 6],
        [3, 7],
        [4, 7],
        [5, 5],
        [6, 5]
      ],
      barres: [],
      position: 1
    }
  ],
  "D#": [
    {
      fingers: [
        [1, 3],
        [2, 5],
        [3, 5],
        [4, 5],
        [5, 3],
        [6, 3]
      ],
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
      fingers: [
        [1, 0],
        [2, 0],
        [3, 1],
        [4, 2],
        [5, 2],
        [6, 0]
      ],
      barres: [],
      position: 1
    }
  ],
  F: [
    {
      fingers: [
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 3],
        [6, 1]
      ],
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
      fingers: [
        [1, 2],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 4],
        [6, 2]
      ],
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
      fingers: [
        [1, 3],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 2],
        [6, 3]
      ],
      barres: [],
      position: 1
    },
    {
      fingers: [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 5],
        [6, 3]
      ],
      barres: [],
      position: 1
    }
  ],
  "G#": [
    {
      fingers: [
        [1, 2],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 4],
        [6, 2]
      ],
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

const minors = {
  Am: [
    {
      fingers: [
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 0],
        [6, x]
      ],
      barres: []
    }
  ],
  Bm: [
    {
      fingers: [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 4],
        [5, 2],
        [6, 2]
      ],
      barres: []
    }
  ],
  Cm: [
    {
      fingers: [
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 5],
        [5, 3],
        [6, 3]
      ],
      barres: []
    }
  ],
  Dm: [
    {
      fingers: [
        [1, 1],
        [2, 3],
        [3, 2],
        [4, 0],
        [5, x],
        [6, x]
      ],
      barres: []
    }
  ],
  Em: [
    {
      fingers: [
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 2],
        [5, 2],
        [6, 0]
      ],
      barres: []
    }
  ],
  Fm: [
    {
      fingers: [
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 3],
        [5, 3],
        [6, 1]
      ],
      barres: []
    }
  ],
  Gm: [
    {
      fingers: [
        [1, 3],
        [2, 3],
        [3, 3],
        [4, 5],
        [5, 5],
        [6, 3]
      ],
      barres: []
    }
  ]
};

const sevenths = {
  A7: [
    {
      fingers: [
        [1, 0],
        [2, 2],
        [3, 0],
        [4, 2],
        [5, 0],
        [6, x]
      ],
      barres: []
    }
  ],
  "A#7": [
    {
      fingers: [
        [1, 1],
        [2, 3],
        [3, 1],
        [4, 3],
        [5, 1],
        [6, x]
      ],
      barres: []
    }
  ],
  C7: [
    {
      fingers: [
        [1, 3],
        [2, 5],
        [3, 3],
        [4, 5],
        [5, 3],
        [6, x]
      ],
      barres: [
        {
          fromString: 5,
          toString: 1,
          fret: 3
        }
      ]
    }
  ],
  "C#7": [
    {
      fingers: [
        [1, 2],
        [2, 4],
        [3, 2],
        [4, 4],
        [5, 2],
        [6, x]
      ],
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
      fingers: [
        [1, 2],
        [2, 1],
        [3, 2],
        [4, 0],
        [5, x],
        [6, x]
      ],
      barres: []
    }
  ],
  E7: [
    {
      fingers: [
        [1, 0],
        [2, 0],
        [3, 1],
        [4, 0],
        [5, 2],
        [6, 0]
      ],
      barres: []
    }
  ],
  F7: [
    {
      fingers: [
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 1],
        [5, 3],
        [6, 1]
      ],
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 1
        }
      ]
    }
  ],
  G7: [
    {
      fingers: [
        [1, 1],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 2],
        [6, 3]
      ],
      barres: []
    }
  ],
  "G#7": {
    fingers: [
      [1, 2],
      [2, 2],
      [3, 3],
      [4, 2],
      [5, 4],
      [6, 2]
    ],
    barres: [
      {
        fromString: 6,
        toString: 1,
        fret: 2
      }
    ],
    position: 3
  }
};

export const chords: any = {
  ...Majors,
  ...minors,
  ...sevenths,
  Dm6: [
    {
      fingers: [
        [1, 0],
        [2, 3],
        [3, 2],
        [4, 0],
        [5, x],
        [6, x]
      ],
      barres: []
    }
  ],
  Faug: [
    {
      fingers: [
        [1, x],
        [2, 6],
        [3, 6],
        [4, 7],
        [5, 8],
        [6, x]
      ],
      barres: []
    }
  ]
};
