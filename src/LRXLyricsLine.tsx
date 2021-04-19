import React from "react";
import {
  LRXGeneralLine,
  LRXGeneralLineEntry,
  OnEntryClickedCallback
} from "./types";
import { If } from "./if";

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
      <div className="avg-rate">{line.avgRate}</div>
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
          <span>
            <If condition={!!entry.content.trim()} key={i}>
              <span
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
            </If>
            <If condition={!entry.content.trim()} key={i}>
              <span className="lrx-lyrics-line-empty-entry">
                {entry.content}
              </span>
            </If>
          </span>
        );
      })}
    </p>
  );
}
