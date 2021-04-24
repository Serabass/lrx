import React, { useState } from "react";
import { chords } from "./chords";
import "./chord-fingering.sass";
import { Col } from "antd";
import * as svguitar from "svguitar";
import { ChordStyle } from "svguitar";
import { Chord, parseChord } from "./chord-parser";
import { createUseLocalStorage } from "../hooks/useLocalStorage";
import { LRXChord } from "../common/types";
import { buildChordName } from "../LRX/extract-chords";
import { transposeChord } from "./transpose-chord";
import ReactChord from "@tombatossals/react-chords/lib/Chord";
import { hot } from "react-hot-loader";

export interface ChordFingeringProps {
  chord: LRXChord;
  transpose?: number;
}

export function ChordFingering({ chord }: ChordFingeringProps) {
  const chord1 = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false
  };
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: ["E", "A", "D", "G", "B", "E"]
    }
  };
  const lite = false; // defaults to false if omitted
  return (
    <div>
      <div>
        <ReactChord chord={chord1} instrument={instrument} lite={lite} />
      </div>
      <div style={{ textAlign: "center", fontWeight: "bold" }}>Am</div>
    </div>
  );
}

export function ChordFingering2({ chord, transpose = 0 }: ChordFingeringProps) {
  let transposed = transposeChord(chord, transpose);
  let transposedChordName = buildChordName(transposed);
  let useLocalStorage = createUseLocalStorage(
    `chord::${transposedChordName}::`
  );
  let [index, setIndex] = useLocalStorage("index", 0);
  let chordEntities = chords[transposedChordName];
  let [container, setContainer] = useState<svguitar.SVGuitarChord | null>();

  if (!chordEntities) {
    throw new Error(`Chord ${transposedChordName} is not recognized [1]`);
  }

  if (chordEntities.length === 0) {
    throw new Error(`Chord ${transposedChordName} is not recognized [2]`);
  }

  let entity = chordEntities[index];
  let o: Chord = entity as Chord;

  if (typeof entity === "string") {
    o = parseChord(entity as string);
  }

  let fingers = o.fingers;

  if (!entity) {
    setIndex(0);
  }

  function createElement(ref: HTMLDivElement | null) {
    if (ref && !container) {
      let c = new svguitar.SVGuitarChord(ref);
      c.chord({
        // array of [string, fret, text | options]
        fingers,

        // optional: barres for barre chords
        barres: o.barres,

        // title of the chart (optional)
        title: transposedChordName
      })
        .configure({
          // Customizations (all optional, defaults shown)

          /**
           * Select between 'normal' and 'handdrawn'
           */
          style: ChordStyle.normal,

          /**
           * The number of strings
           */
          strings: 6,

          /**
           * The number of frets
           */
          frets: 10,
          /**
           * Default position if no positon is provided (first fret is 1)
           */
          position: o.position,

          /**
           * These are the labels under the strings. Can be any string.
           */
          tuning: ["e", "A", "D", "G", "B", "E"],

          /**
           * The position of the fret label (eg. "3fr")
           */
          fretLabelPosition: "right" as any,

          /**
           * The font size of the fret label
           */
          fretLabelFontSize: 38,

          /**
           * The font size of the string labels
           */
          tuningsFontSize: 28,

          /**
           * Size of a nut relative to the string spacing
           */
          nutSize: 0.65,

          /**
           * Color of a finger / nut
           */
          nutColor: "#000",

          /**
           * The color of text inside nuts
           */
          nutTextColor: "#FFF",

          /**
           * The size of text inside nuts
           */
          nutTextSize: 22,

          /**
           * stroke color of a nut. Defaults to the nut color if not set
           */
          nutStrokeColor: "#000000",

          /**
           * stroke width of a nut
           */
          nutStrokeWidth: 0,

          /**
           * stroke color of a barre chord. Defaults to the nut color if not set
           */
          barreChordStrokeColor: "#000000",

          /**
           * stroke width of a barre chord
           */
          barreChordStrokeWidth: 0,

          /**
           * Height of a fret, relative to the space between two strings
           */
          fretSize: 1.2,

          /**
           * The minimum side padding (from the guitar to the edge of the SVG) relative to the whole width.
           * This is only applied if it's larger than the letters inside of the padding (eg the starting fret)
           */
          sidePadding: 0.2,

          /**
           * The font family used for all letters and numbers
           */
          fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',

          /**
           * Default title of the chart if no title is provided
           */
          title: "F# minor",

          /**
           * Font size of the title. This is only the initial font size. If the title doesn't fit, the title
           * is automatically scaled so that it fits.
           */
          titleFontSize: 48,

          /**
           * Space between the title and the chart
           */
          titleBottomMargin: 0,

          /**
           * Global color of the whole chart. Can be overridden with more specifig color settings such as
           * @link titleColor or @link stringColor etc.
           */
          color: "#000000",

          /**
           * The background color of the chord diagram. By default the background is transparent. To set the background to transparent either set this to 'none' or undefined
           */
          backgroundColor: "none",

          /**
           * Barre chord rectangle border radius relative to the nutSize (eg. 1 means completely round endges, 0 means not rounded at all)
           */
          barreChordRadius: 0.25,

          /**
           * Size of the Xs and Os above empty strings relative to the space between two strings
           */
          emptyStringIndicatorSize: 0.6,

          /**
           * Global stroke width
           */
          strokeWidth: 2,

          /**
           * The width of the top fret (only used if position is 1)
           */
          topFretWidth: 10,

          /**
           * The color of the title (overrides color)
           */
          titleColor: "#000000",
          /**
           * The color of the strings (overrides color)
           */
          stringColor: "#000000",
          /**
           * The color of the fret position (overrides color)
           */
          fretLabelColor: "#000000",
          /**
           * The color of the tunings (overrides color)
           */
          tuningsColor: "#000000",
          /**
           * The color of the frets (overrides color)
           */
          fretColor: "#000000",
          /**
           * When set to true the distance between the chord diagram and the top of the SVG stayes the same,
           * no matter if a title is defined or not.
           */
          fixedDiagramPosition: false
        })
        .draw();
      setContainer(c);
    }
  }

  return (
    <Col md={3}>
      <div
        ref={(ref) => {
          createElement(ref);
        }}
        style={{ width: "100px" }}
      />
    </Col>
  );
}

export default hot(module)(ChordFingering);
