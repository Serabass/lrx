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

function time(value: number) {
  let mm = Math.floor(value / 60)
    .toString()
    .padStart(2, "0");
  let ss = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");
  let ms = Math.round((value - Math.floor(value)) * 1000)
    .toString()
    .padStart(3, "0");

  return `${mm}:${ss}.${ms}`;
}

const LRX = ({ contents, audioUrl }: LRXProps) => {
  let lrxDoc: LRXDocument = parser.parse(contents.replace(/^\s+/, ""));
  let [transpose, setTranspose] = useState<number>(0);
  let [activeEntry, setActiveEntry] = useState<LRXGeneralLineEntry>();
  let [currentTime, setCurrentTime] = useState<number>(0);

  let activeReportLines = lrxDoc.report.lines.filter(
    (line) => line.n === activeEntry?.bm.n
  );

  return (
    <div className="wrapper">
      {audioUrl ? (
        <audio
          src={audioUrl}
          controls
          style={{ width: "100%" }}
          onTimeUpdate={(e) => {
            setCurrentTime(e.currentTarget.currentTime);
          }}
        />
      ) : null}
      <pre className="lrx-document">
        {time(currentTime)}
        <div className="lrx-toolbox">
          <input
            type="number"
            min={-6}
            max={6}
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
              transpose={transpose}
              currentTime={currentTime}
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

              <ul>
                {activeReportLines.map((line, i) => {
                  return (
                    <li key={i}>
                      ~{line.n} {line.text}
                    </li>
                  );
                })}
              </ul>
            </pre>
          ) : null}
        </div>
      </pre>
    </div>
  );
};

export default hot(module)(LRX);
