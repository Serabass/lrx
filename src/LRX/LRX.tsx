import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./lrx.sass";
import { LRXDocument, LRXGeneralLineEntry } from "../common/types";
import { LRXBlock } from "./LRXBlock";
import "antd/dist/antd.css";
import { Typography, Affix, Row, Col, Divider, Collapse } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { createUseLocalStorage } from "../hooks/useLocalStorage";
import { If } from "../common/if";
import { ChordTransposer } from "../chords/chord-transposer";
import { Info } from "../info";
import { extractChords } from "./extract-chords";
// import ChordFingering from "../chords/chord-fingering";
import { ChordFingering2 } from "../chords/cf";
import { LRXContext } from "./LRXContext";

export interface LRXProps {
  doc: LRXDocument;
  audioUrl?: string;
}

let useLocalStorage = createUseLocalStorage("lrx");

const LRX = ({ doc, audioUrl }: LRXProps) => {
  let [transpose, setTranspose] = useLocalStorage<number>("transpose", 0);
  let [fingerings, setFingerings] = useLocalStorage<string[]>("fingerings", []);
  let [activeEntry, setActiveEntry] = useState<LRXGeneralLineEntry>();
  let [currentTime, setCurrentTime] = useState<number>(0);
  let maxRate = Math.max(...doc.blocks.map((b) => b.avgRate));
  let songChords = extractChords(doc);

  let activeReportLines = doc.report.lines.filter(
    (line) => line.n === activeEntry?.bm.n
  );

  return (
    <LRXContext.Provider value={{ transpose, setTranspose }}>
      <div className="wrapper">
        <Row>
          <Col md={24}>
            <If condition={!!audioUrl}>
              <audio
                src={audioUrl}
                controls
                style={{
                  width: "100%",
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  zIndex: 9999
                }}
                onTimeUpdate={(e) => {
                  setCurrentTime(e.currentTarget.currentTime);
                }}
              />
            </If>
          </Col>
        </Row>

        <Row>
          <Col md={24}>
            <ErrorBoundary>
              <pre className="lrx-document">
                <div className="lrx-toolbox">
                  <ChordTransposer min={-6} max={6} buttonsType="dashed" />
                </div>
                <Divider />

                <Typography.Title level={2}>{doc.title.title}</Typography.Title>

                <ErrorBoundary>
                  <div>
                    <Collapse
                      defaultActiveKey={fingerings}
                      onChange={(e) => {
                        setFingerings(e as string[]);
                      }}
                    >
                      <Collapse.Panel header="Аккорды" key="chords">
                        <Row style={{ padding: 20 }}>
                          {songChords.map((chord, i) => (
                            <Col md={3} key={i}>
                              <ChordFingering2
                                chord={chord}
                                transpose={transpose}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Collapse.Panel>
                    </Collapse>
                  </div>

                  <div className="lrx-document-wrapper">
                    {doc.blocks.map((block, i) => (
                      <LRXBlock
                        maxRate={maxRate}
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
                </ErrorBoundary>
                <div className="lrx-document-info">
                  <Affix>
                    <Info
                      activeEntry={activeEntry}
                      activeReportLines={activeReportLines}
                    />
                  </Affix>
                </div>
              </pre>
            </ErrorBoundary>
          </Col>
        </Row>
      </div>
    </LRXContext.Provider>
  );
};

export default hot(module)(LRX);
