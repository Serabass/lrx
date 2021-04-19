import React from "react";
import {
  LRXGeneralLine,
  LRXGeneralLineEntry,
  OnEntryClickedCallback
} from "./types";

export interface LRXLyricsLineProps {
  line: LRXGeneralLine;
  onEntryClicked: OnEntryClickedCallback;
  activeEntry?: LRXGeneralLineEntry;
  timeHighlight?: boolean;
}

export function LRXLyricsLine({
  line,
  onEntryClicked = () => {},
  activeEntry,
  timeHighlight = false
}: LRXLyricsLineProps) {
  return (
    <p className={"lrx-lyrics-line" + (timeHighlight ? " time-highlight" : "")}>
      {line.content.map((entry, i) => {
        let active = false;
        let highlight = false;

        if (activeEntry) {
          if (activeEntry._id === entry._id) {
            active = true;
          }

          if (activeEntry.bm && entry.bm) {
            if (activeEntry.bm.n && entry.bm.n) {
              if (activeEntry.bm.n === entry.bm.n) {
                highlight = true;
              }
            }
          }
        }

        return (
          <span
            key={i}
            className={
              "lrx-lyrics-line-entry" +
              (active ? " active" : "") +
              (highlight ? " highlight" : "")
            }
            onClick={() => {
              onEntryClicked(entry);
            }}
          >
            {entry.content}&nbsp;
          </span>
        );
      })}
      <sup>{line.avgRate}</sup>
    </p>
  );
}
