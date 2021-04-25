import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import { If } from "../common/if";
import { ChordFingering2 } from "../chords/cf";
import { hot } from "react-hot-loader";

export interface ChordListProps {
  list: any[];
}

function ChordList({ list }: ChordListProps) {
  let [showChords, setShowChords] = useState<boolean>(true);
  return (
    <Row>
      <Col md={24}>
        <Row>
          <Col md={24}>
            <Button onClick={() => setShowChords(!showChords)}>
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
