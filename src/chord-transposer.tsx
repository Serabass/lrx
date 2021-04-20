import React from "react";
import { Button, Col, Row } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { ButtonType } from "antd/lib/button/button";

export interface ChordTransposerProps {
  value: number;
  min: number;
  max: number;
  onValueChanged: (value: number) => void;
  buttonsType?: ButtonType;
}

export function ChordTransposer({
  value,
  min,
  max,
  onValueChanged,
  buttonsType = "default"
}: ChordTransposerProps) {
  let stringValue = value.toString();

  if (value > 0) {
    stringValue = `+${stringValue}`;
  }

  return (
    <Row>
      <Col md={1}>
        <Button
          type={buttonsType}
          icon={<ArrowDownOutlined />}
          disabled={value <= min}
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
          type={buttonsType}
          icon={<ArrowUpOutlined />}
          disabled={value >= max}
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
