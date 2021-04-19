import React, { useState } from "react";
import { hot } from "react-hot-loader";
// @ts-ignore
import parser from "./parser.pegjs";
import "./lrx.sass";
import { LRXDocument, LRXGeneralLineEntry } from "./types";
import { LRXBlock } from "./LRXBlock";

const LRX = ({ contents }: any) => {
  let lrxDoc: LRXDocument = parser.parse(contents.replace(/^\s+/, ""));
  let [transpose, setTranspose] = useState<number>(0);
  let [activeEntry, setActiveEntry] = useState<LRXGeneralLineEntry>();

  return (
    <div className="wrapper">
      <pre className="lrx-document">
        <div className="lrx-toolbox">
          <input
            type="number"
            className="transpose-input"
            value={transpose}
            onChange={(e) => {
              setTranspose(+e.target.value);
            }}
          />
        </div>
        <h1>{lrxDoc.title.title}</h1>

        <div className="lrx-document-wrapper">
          {lrxDoc.blocks.map((block, i) => (
            <LRXBlock
              block={block}
              key={i}
              activeEntry={activeEntry}
              onEntryClicked={(entry) => {
                setActiveEntry(entry);
              }}
            />
          ))}
        </div>
        <div className="lrx-document-info">
          <pre>{JSON.stringify(activeEntry, null, 2)}</pre>
        </div>
      </pre>
    </div>
  );
};

export default hot(module)(LRX);
