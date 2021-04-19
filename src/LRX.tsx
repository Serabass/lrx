import React, { useState } from "react";
import { hot } from "react-hot-loader";
// @ts-ignore
import parser from "./parser.pegjs";
import "./lrx.sass";
import { LRXDocument, LRXGeneralLineEntry } from "./types";
import { LRXBlock } from "./LRXBlock";

export interface LRXProps {
  contents: string;
  audioUrl?: string;
}

const LRX = ({ contents, audioUrl }: LRXProps) => {
  let lrxDoc: LRXDocument = parser.parse(contents.replace(/^\s+/, ""));
  let [transpose, setTranspose] = useState<number>(0);
  let [activeEntry, setActiveEntry] = useState<LRXGeneralLineEntry>();

  let activeReportLines = lrxDoc.report.lines.filter(
    (line) => line.n === activeEntry?.bm.n
  );

  console.log(audioUrl);

  return (
    <div className="wrapper">
      {audioUrl ? (
        <audio src={audioUrl} controls style={{ width: "100%" }} />
      ) : null}
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
          {activeEntry ? (
            <pre>
              <h3>#{activeEntry._id}</h3>
              <p>{activeEntry.content}</p>

              <hr />

              {activeReportLines.map((line, i) => {
                return (
                  <p key={i}>
                    ~{line.n} {line.text}
                  </p>
                );
              })}
            </pre>
          ) : null}
        </div>
      </pre>
    </div>
  );
};

export default hot(module)(LRX);
