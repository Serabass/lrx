import React from "react";
import { LRXDocumentBlock, OnEntryClickedCallback } from "./types";
import { LRXLine } from "./LRXLine";

export function LRXBlock({
  block,
  onEntryClicked = () => {}
}: {
  block: LRXDocumentBlock;
  onEntryClicked: OnEntryClickedCallback;
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
          onEntryClicked={(entry) => {
            onEntryClicked(entry);
          }}
        />
      ))}
    </div>
  );
}
