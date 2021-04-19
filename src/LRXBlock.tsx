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
  activeEntry
}: {
  block: LRXDocumentBlock;
  onEntryClicked: OnEntryClickedCallback;
  activeEntry?: LRXGeneralLineEntry;
}) {
  return (
    <div className="lrx-block">
      <h3 className="lrx-block-header">
        [{block.header.title}]
        {block.avgRate > 0 ? <sup>{block.avgRate}</sup> : null}
      </h3>
      {block.body.map((line, i) => (
        <LRXLine
          line={line}
          key={i}
          activeEntry={activeEntry}
          onEntryClicked={(entry) => {
            onEntryClicked(entry);
          }}
        />
      ))}
    </div>
  );
}