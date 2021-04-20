import React, { useState } from "react";
import { Col, Divider, Popover, Row } from "antd";
import { LRXChord, LRXChordsLine } from "./types";
import { transposeChord } from "./transpose-chord";
import { ChordFingering } from "./chord-fingering";

export interface LRXChordLineProps {
  line: LRXChordsLine;
  transpose?: number;
}

interface ChordProps {
  chord: LRXChord;
  transpose: number;
  trigger?: "click" | "hover";
}

export function Chord({ chord, transpose, trigger = "click" }: ChordProps) {
  let [popoverVisible, setPopoverVisible] = useState(false);
  let chordName = `${chord.note}${chord.mod || ""}${chord.suffix || ""}`;
  chordName = transposeChord(chordName, transpose);

  if (chord.bass) {
    chordName += `/${transposeChord(chord.bass.note, transpose)}`;
  }

  let events: any = {};

  if (trigger === "click") {
    events = {
      onClick: () => {
        setPopoverVisible(!popoverVisible);
      }
    };
  } else if (trigger === "hover") {
    events = {
      onMouseEnter: () => {
        setPopoverVisible(true);
      },
      onMouseLeave: () => {
        setPopoverVisible(false);
      }
    };
  }

  return (
    <span>
      {chord.space.start}
      <Popover
        content={<ChordFingering chord={chordName} transpose={transpose} />}
      >
        <span className="chord-entry" {...events}>
          {chordName}
        </span>
      </Popover>
      {chord.space.end}
    </span>
  );
}

export function LRXChordLine({ line, transpose = 0 }: LRXChordLineProps) {
  return (
    <p className="lrx-chords-line">
      <Row>
        {line.chords.map((chord, i) => {
          let chordName = `${chord.note}${chord.mod || ""}${
            chord.suffix || ""
          }`;
          return (
            <Col key={i} md={6}>
              <ChordFingering chord={chordName} transpose={transpose} />
            </Col>
          );
        })}
      </Row>
      <Divider />
      {line.chords.map((chord, i) => {
        return <Chord chord={chord} transpose={transpose} key={i} />;
      })}
    </p>
  );
}
