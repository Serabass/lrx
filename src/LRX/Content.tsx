import { Col, Divider, Row, Select, Tabs } from "antd";
import { LRXDocument } from "../common/types";
import parser from "../parser.pegjs";
import { If } from "../common/if";
import LRXEditor from "./LRXEditor";
import LRX from "./LRX";
import React from "react";
import { hot } from "react-hot-loader";
import { createUseLocalStorage } from "../hooks/useLocalStorage";
import { act } from "react-dom/test-utils";

let useLocalStorage = createUseLocalStorage("lrx:app");

interface ContentProps {
  els: HTMLScriptElement[];
}

function Content({ els }: ContentProps) {
  let [activeTab, setActiveTab] = useLocalStorage("activeTab", 0);
  let el = els[activeTab];
  let mp3 = el.dataset.mp3;
  let contents = el.innerHTML;
  let source = contents.replace(/^\s+/, "");
  let lrxDoc: LRXDocument = parser.parse(source);
  let editable = el.dataset.editable === "true";

  return (
    <Row>
      <Col md={24}>
        <Row>
          <Col md={24}>
            <Select
              value={activeTab}
              onChange={(value) => {
                setActiveTab(value);
              }}
            >
              {els.map((el, i) => {
                let contents = el.innerHTML;
                let source = contents.replace(/^\s+/, "");
                let lrxDoc: LRXDocument = parser.parse(source);
                return (
                  <Select.Option value={i} key={i}>
                    {lrxDoc.title.title}
                  </Select.Option>
                );
              })}
            </Select>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <If condition={editable}>
              <LRXEditor source={source} audioUrl={mp3 ?? ""} />
            </If>
            <If condition={!editable}>
              <LRX doc={lrxDoc} audioUrl={mp3} />
            </If>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default hot(module)(Content);
