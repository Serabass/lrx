import React, { useState } from "react";
import { Alert, Col, Row } from "antd";
import LRX from "./LRX";
import { LRXDocument } from "./types";
import parser from "./parser.pegjs";
import { hot } from "react-hot-loader";
import { Controlled as CodeMirror } from "react-codemirror2";

export interface LRXEditorProps {
  source: string;
  audioUrl: string;
}

const LRXEditor = ({ source, audioUrl }: LRXEditorProps) => {
  let [sourceText, setSourceText] = useState(source);
  let src = sourceText.replace(/^\s+/, "");
  let ed: CodeMirror | null = null;

  return (
    <Row className="lrx-editor">
      <Col md={12}>
        <CodeMirror
          ref={(c) => {
            ed = c;
          }}
          value={src}
          options={{
            mode: "lrx",
            theme: "material",
            lineNumbers: true
          }}
          onRenderLine={(editor, line, element) => {}}
          onBeforeChange={(editor, data, value) => {
            setSourceText(value);
          }}
          onChange={(editor, data, value) => {}}
        />
      </Col>
      <Col md={12}>
        {(() => {
          try {
            let lrxDoc = parser.parse(src) as LRXDocument;
            return <LRX doc={lrxDoc} audioUrl={audioUrl} />;
          } catch (e) {
            return (
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
            );
          }
        })()}
      </Col>
    </Row>
  );
};

export default hot(module)(LRXEditor);
