import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import { If } from "../common/if";
import { ChordFingering2 } from "../chords/cf";
import { hot } from "react-hot-loader";
import { LRXChord } from "../common/types";
import { createUseLocalStorage } from "../hooks/useLocalStorage";

export interface ChordListProps {
  list: LRXChord[];
}

let useLocalStorage = createUseLocalStorage("chordList");

function ChordList({ list }: ChordListProps) {
  let [showChords, setShowChords] = useLocalStorage<boolean>(
    "showChords",
    true
  );
  return (
    <Row>
      <Col md={24}>
        <Row>
          <Col md={24}>
            <Button onClick={() => setShowChords(!showChords)} type="dashed">
              {showChords ? "Скрыть аккорды" : "Показать аккорды"}
            </Button>
          </Col>
        </Row>
        <If condition={showChords}>
          <Row style={{ padding: 20 }}>
            {list.map((chord, i) => (
              <Col md={3} key={i}>
                <ChordFingering2 chord={chord} />
              </Col>
            ))}
          </Row>
        </If>
      </Col>
    </Row>
  );
}

export default hot(module)(ChordList);
