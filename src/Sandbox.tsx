import React, { useState } from "react";
import { Col, Row } from "antd";
import { ChordFingering } from "./chords/chord-fingering";
import { chord } from "./chords/chord";
import { ChordFingering2 } from "./chords/cf";
import { hot } from "react-hot-loader";
import { ChordTransposer } from "./chords/chord-transposer";
import { transposeChord } from "./chords/transpose-chord";

const Sandbox = function () {
  let chrd = chord`Am`;
  let [transpose, setTranspose] = useState(0);
  return (
    <Row>
      <Col md={24}>
        <Row>
          <Col md={24}>
            <ChordTransposer
              value={transpose}
              min={-6}
              max={6}
              onValueChanged={(v) => {
                setTranspose(v);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col offset={2} md={6}>
            <ChordFingering chord={chrd} transpose={transpose} />
          </Col>
          <Col offset={2} md={6}>
            <ChordFingering2 chord={chrd} transpose={transpose} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default hot(module)(Sandbox);
