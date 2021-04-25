import React, { useState } from "react";
import { Popover } from "antd";
import { LRXChord, LRXChordsLine } from "../common/types";
import { transposeChord } from "../chords/transpose-chord";
import { ChordFingering2 } from "../chords/cf";

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
  chord = transposeChord(chord, transpose);
  let chordName = `${chord.note}${chord.mod || ""}${chord.suffix || ""}`;

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
      <Popover content={<ChordFingering2 chord={chord} />} placement="bottom">
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
      {line.chords.map((chord, i) => {
        return <Chord chord={chord} transpose={transpose} key={i} />;
      })}
    </p>
  );
}
