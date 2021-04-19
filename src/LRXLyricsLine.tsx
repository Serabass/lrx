import React from "react";
import {
  LRXGeneralLine,
  LRXGeneralLineEntry,
  OnEntryClickedCallback
} from "./types";
import { act } from "react-dom/test-utils";

export interface LRXLyricsLineProps {
  line: LRXGeneralLine;
  onEntryClicked: OnEntryClickedCallback;
  activeEntry?: LRXGeneralLineEntry;
}

export function LRXLyricsLine({
  line,
  onEntryClicked = () => {},
  activeEntry
}: LRXLyricsLineProps) {
  return (
    <p className="lrx-lyrics-line">
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
