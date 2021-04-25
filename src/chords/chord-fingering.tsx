import React, { useState } from "react";
import { chords } from "./chords";
import { Col } from "antd";
import { LRXChord } from "../common/types";
import { buildChordName } from "../LRX/extract-chords";
import { transposeChord } from "./transpose-chord";
import { hot } from "react-hot-loader";
import ReactRough, { Line, Rectangle } from "react-rough";

export interface ChordFingeringProps {
  chord: LRXChord;
  transpose?: number;
}

export function ChordFingering({ chord, transpose = 0 }: ChordFingeringProps) {
  let transposed = transposeChord(chord, transpose);
  let transposedChordName = buildChordName(transposed);
  let [index, setIndex] = useState(0);
  let chordEntities = chords[transposedChordName];

  if (!chordEntities) {
    throw new Error(`Chord ${transposedChordName} is not recognized [1]`);
  }

  if (chordEntities.length === 0) {
    throw new Error(`Chord ${transposedChordName} is not recognized [2]`);
  }

  let entity = chordEntities[index];

  if (!entity) {
    setIndex(0);
  }

  let strings = ["e", "A", "D", "G", "B", "E"];
  let fretSize = 10;
  let stringSize = 10;
  let xOffset = 20;
  let yOffset = 25;
  let fretCount = 6;
  let frets = new Array(fretCount).fill(0).map((n, i) => i + 1);

  return (
    <Col md={3}>
      <ReactRough
        config={{ options: { roughness: 0.5, strokeWidth: 0.5 } }}
        width={100}
        renderer="svg"
      >
        <text x="0" y="30" width={100} fontSize="18" fill="#000000">
          {transposedChordName}
        </text>
        <Line
          x1={xOffset}
          y1={yOffset}
          x2={xOffset + (strings.length - 1) * stringSize}
          y2={yOffset}
          fillWeight={1}
          strokeWidth={4}
        />
        <Rectangle
          x={xOffset}
          y={yOffset}
          width={(strings.length - 1) * stringSize}
          height={80}
          strokeWidth={0.5}
        />
        {frets.map((string, i) => {
          return (
            <Line
              x1={xOffset + 10 * i}
              x2={xOffset + 10 * i}
              y1={yOffset + 80}
              y2={yOffset + 80}
              key={i}
              strokeWidth={2}
              stroke="red"
            />
          );
        })}
        {strings.map((string, i) => {
          return (
            <Line
              x1={xOffset + fretSize * i}
              x2={xOffset + fretSize * i}
              y1={yOffset}
              y2={yOffset + 80}
              key={i}
            />
          );
        })}
      </ReactRough>
    </Col>
  );
}

export default hot(module)(ChordFingering);
