import React, { useContext } from "react";
import { Button, Col, Row } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { ButtonType } from "antd/lib/button/button";
import { LRXContext } from "../LRX/LRXContext";

export interface ChordTransposerProps {
  min: number;
  max: number;
  onValueChanged: (value: number) => void;
  buttonsType?: ButtonType;
}

export function ChordTransposer({
  min,
  max,
  onValueChanged,
  buttonsType = "default"
}: ChordTransposerProps) {
  let ctx = useContext(LRXContext);
  let stringValue = ctx.transpose.toString();

  if (ctx.transpose > 0) {
    stringValue = `+${stringValue}`;
  }

  return (
    <Row>
      <Col md={1}>
        <Button
          type={buttonsType}
          icon={<ArrowDownOutlined />}
          disabled={ctx.transpose <= min}
          onClick={() => {
            onValueChanged(ctx.transpose - 1);
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
          disabled={ctx.transpose >= max}
          onClick={() => {
            onValueChanged(ctx.transpose + 1);
          }}
        />
      </Col>
    </Row>
  );
}
