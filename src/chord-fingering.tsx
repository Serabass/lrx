import React from "react";
import { createUseLocalStorage } from "./useLocalStorage";
import { chords } from "./chords";
import { transposeChord } from "./transpose-chord";
import "./chord-fingering.sass";
import { Button, Col, Row } from "antd";

export interface ChordFingeringNavProps {
  chordName: any;
  index: any;
  length: any;
  setIndex: any;
}

function ChordFingeringNav({
  chordName,
  index,
  setIndex
}: ChordFingeringNavProps) {
  let prevDisabled = false;
  let nextDisabled = false;

  return (
    <Row className="chord-fingering">
      <Col
        md={4}
        onClick={() => {
          if (prevDisabled) {
            return;
          }

          setIndex(index - 1);
        }}
      >
        <Button type="default">&lt;</Button>
      </Col>
      <Col md={16} style={{ textAlign: "center" }}>
        {chordName}
      </Col>
      <Col
        md={4}
        onClick={() => {
          if (nextDisabled) {
            return;
          }
          setIndex(index + 1);
        }}
      >
        <Button type="default">&gt;</Button>
      </Col>
    </Row>
  );
}

export interface ChordFingeringProps {
  chord: any;
  transpose: any;
}

export function ChordFingering({ chord, transpose }: ChordFingeringProps) {
  let useLocalStorage = createUseLocalStorage(`chord::${chord.name}::`);
  let [index, setIndex] = useLocalStorage("index", 0);
  let transposed = transposeChord(chord, transpose);
  let fingering = chords[transposed];

  if (!fingering) {
    throw new Error(`Chord ${transposed} is not recognized`);
  }

  if (fingering.length === 0) {
    throw new Error(`Chord ${transposed} is not recognized`);
  }

  let first = fingering[index];

  if (!first) {
    setIndex(0);
    return null;
  }

  let tuning = "eADGBE".split("");
  let stringWidth = 12;
  let f = first.split("");

  return (
    <div className="container p-0">
      <ChordFingeringNav
        chordName={transposed}
        index={index}
        length={fingering.length}
        setIndex={(i: any) => {
          setIndex(i);
        }}
      />
      <Row>
        <Col md={24}>
          <svg>
            {tuning.map((string, i) => (
              <text
                x={5 + stringWidth * i}
                y={15}
                key={i}
                className="tuning-letter"
              >
                {string}
              </text>
            ))}

            {tuning.map((string, i) => (
              <line
                key={i}
                x1={8 + stringWidth * i}
                y1={20}
                x2={8 + stringWidth * i}
                y2={100}
                strokeWidth={0.5}
                stroke="black"
              />
            ))}

            {[1, 2, 3, 4, 5, 6, 7].map((fret, i) => (
              <text
                x={0}
                y={30 + stringWidth * i}
                className="fret-index"
                key={i}
              >
                {fret}
              </text>
            ))}

            {[1, 2, 3, 4, 5, 6, 7, 8].map((fret) => {
              let stroke = "rgba(0, 0, 0, 0.1)";

              if (fret === 1) {
                stroke = "rgba(0, 0, 0, 0.9)";
              }

              return (
                <line
                  key={fret}
                  x1={8}
                  y1={8 + stringWidth * fret}
                  x2={8 + stringWidth * 5}
                  y2={8 + stringWidth * fret}
                  strokeWidth={0.5}
                  stroke={stroke}
                />
              );
            })}

            {f.map((fret: any, string: any) => {
              fret = parseInt(fret);
              if (fret === 0) {
                return null;
              }
              return (
                <circle
                  cx={8 + string * stringWidth}
                  cy={26 + (fret - 1) * stringWidth}
                  r={3}
                  fill="black"
                  key={string}
                />
              );
            })}
          </svg>
        </Col>
      </Row>
    </div>
  );
}
