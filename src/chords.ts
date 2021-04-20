const x = "x";

const Majors = {
  A: [
    {
      fingers: [
        [1, 0],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 0],
        [6, x]
      ],
      barres: []
    }
  ],
  "A#": [
    {
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
          fromString: 6,
          toString: 1,
          fret: 1
        }
      ]
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
      ]
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
      barres: []
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
      barres: []
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
        [6, 2]
      ],
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 2
        }
      ]
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
      barres: []
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
      barres: []
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
      barres: []
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
      ]
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
      ]
    }
  ],
  G: [
    {
      fingers: [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 5],
        [6, 3]
      ],
      barres: []
    },
    {
      fingers: [
        [1, 3],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 2],
        [6, 3]
      ],
      barres: []
    }
  ],
  "G#": [
    {
      fingers: [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 5],
        [6, 3]
      ],
      barres: [
        {
          fromString: 6,
          toString: 1,
          fret: 3
        }
      ],
      position: 2
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
  E7: [
    {
      fingers: [
        [1, 0],
        [2, 0],
        [3, 1],
        [4, 0],
        [5, 2],
        [6, x]
      ],
      barres: []
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
  ]
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
