import React from "react";
import { LRXDocumentBlock } from "./types";
import { LRXLine } from "./LRXLine";

export function LRXBlock({ block }: { block: LRXDocumentBlock }) {
  return (
    <div className="lrx-block">
      <h3 className="lrx-block-header">
        [{block.header.title}]
        {block.avgRate > 0 ? <sup>{block.avgRate}</sup> : null}
      </h3>
      {block.body.map((line, i) => (
        <LRXLine line={line} key={i} onEntryClicked={() => {}} />
      ))}
    </div>
  );
}
