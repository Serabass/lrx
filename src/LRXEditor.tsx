import React, { useState } from "react";
import { Alert, Col, Row } from "antd";
import LRX from "./LRX";
import { LRXDocument } from "./types";
// @ts-ignore
import parser from "./parser.pegjs";
import { hot } from "react-hot-loader";
import { UnControlled as CodeMirror } from "react-codemirror2";

export interface LRXEditorProps {
  source: string;
  audioUrl: string;
}

const LRXEditor = ({ source, audioUrl }: LRXEditorProps) => {
  let [sourceText, setSourceText] = useState(source);
  let src: string, lrxDoc;
  [sourceText, setSourceText] = useState(source);
  src = sourceText.replace(/^\s+/, "");
  let Editor = ({ src }: { src: string }) => {
    return (
      <CodeMirror
        value={src}
        options={{
          mode: "xml",
          theme: "material",
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
          setSourceText(value);
        }}
      />
    );
  };

  try {
    lrxDoc = parser.parse(src) as LRXDocument;

    return (
      <Row className="lrx-editor">
        <Col md={12}>
          <Editor src={src} />
        </Col>
        <Col md={12}>
          <LRX doc={lrxDoc} audioUrl={audioUrl} />
        </Col>
      </Row>
    );
  } catch (e) {
    return (
      <Row className="lrx-editor">
        <Col md={12}>
          <Editor src={src} />
        </Col>
        <Col md={12}>
          <Alert
            message={
              <pre>
                <p>{e.message}</p>
                <p>at</p>
                <p>
                  {e.location.start.line}:{e.location.start.column}
                </p>
                <p>
                  {e.location.end.line}:{e.location.end.column}
                </p>
              </pre>
            }
            type="error"
          />
        </Col>
      </Row>
    );
  }
};

export default hot(module)(LRXEditor);
