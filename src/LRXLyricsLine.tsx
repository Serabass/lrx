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
  currentTime?: number;
}

export function LRXLyricsLine({
  line,
  onEntryClicked = () => {},
  activeEntry,
  timeHighlight = false,
  currentTime = 0
}: LRXLyricsLineProps) {
  let currentPercentage = 0;
  if (timeHighlight && line && line.timecode) {
    let duration = line.timecode.end.value - line.timecode.start.value;
    let currentValue = currentTime - line.timecode.start.value;
    currentPercentage = (currentValue / duration) * 100;
  }

  return (
    <p className={"lrx-lyrics-line" + (timeHighlight ? " time-highlight" : "")}>
      <div
        className="progress-bar"
        style={{ width: `${currentPercentage}%` }}
      />
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
          <span key={i}>
            <If condition={!!entry.content.trim()}>
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
            <If condition={!entry.content.trim()}>
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
