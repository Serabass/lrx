import React, { useState } from "react";
import { hot } from "react-hot-loader";
// @ts-ignore
import parser from "./parser.pegjs";
import "./lrx.sass";
import { LRXDocument } from "./types";
import { LRXBlock } from "./LRXBlock";

const LRX = ({ contents }: any) => {
  let lrxDoc: LRXDocument = parser.parse(contents.replace(/^\s+/, ""));
  let [transpose, setTranspose] = useState<number>(0);

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
            <LRXBlock block={block} key={i} />
          ))}
        </div>
        <div className="lrx-document-info">info</div>
      </pre>
    </div>
  );
};

export default hot(module)(LRX);
