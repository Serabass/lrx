import React from "react";
import { Button, Col, Row } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

export interface ChordTransposerProps {
  value: number;
  min: number;
  max: number;
  onValueChanged: (value: number) => void;
}

export function ChordTransposer({
  value,
  min,
  max,
  onValueChanged
}: ChordTransposerProps) {
  let stringValue = value.toString();

  if (value > 0) {
    stringValue = `+${stringValue}`;
  } else if (value < 0) {
    stringValue = `-${stringValue}`;
  }

  return (
    <Row>
      <Col md={1}>
        <Button
          icon={<ArrowUpOutlined />}
          onClick={() => {
            if (value <= min) {
              return;
            }

            onValueChanged(value - 1);
          }}
        />
      </Col>
      <Col
        md={1}
        style={{ textAlign: "center", lineHeight: "32px", fontWeight: "bold" }}
      >
        {stringValue}
      </Col>
      <Col md={1}>
        <Button
          icon={<ArrowDownOutlined />}
          onClick={() => {
            if (value >= max) {
              return;
            }

            onValueChanged(value + 1);
          }}
        />
      </Col>
    </Row>
  );
}
