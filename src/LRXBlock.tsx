import React from "react";
import {
  LRXDocumentBlock,
  LRXGeneralLineEntry,
  OnEntryClickedCallback
} from "./types";
import { LRXLine } from "./LRXLine";

export function LRXBlock({
  block,
  onEntryClicked = () => {},
  activeEntry,
  currentTime = 0
}: {
  block: LRXDocumentBlock;
  onEntryClicked: OnEntryClickedCallback;
  activeEntry?: LRXGeneralLineEntry;
  currentTime?: number;
}) {
  let timeHighlightedLine = block.body.find((line) => {
    if (!line.timecode) {
      return false;
    }

    return line.timecode.value > currentTime - 5;
  });
  return (
    <div className="lrx-block">
      <h3 className="lrx-block-header">
        [{block.header.title}]
        {block.avgRate > 0 ? <sup>{block.avgRate}</sup> : null}
      </h3>
      {block.body.map((line, i) => {
        return (
          <LRXLine
            line={line}
            timeHighlight={timeHighlightedLine === line}
            key={i}
            activeEntry={activeEntry}
            onEntryClicked={(entry) => {
              onEntryClicked(entry);
            }}
          />
        );
      })}
    </div>
  );
}
