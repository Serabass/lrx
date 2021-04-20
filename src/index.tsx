import React from "react";
import { render } from "react-dom";
import LRX from "./LRX";
import { Tabs } from "antd";
import { LRXDocument } from "./types";
// @ts-ignore
import parser from "./parser.pegjs";
import { createUseLocalStorage } from "./useLocalStorage";

const { TabPane } = Tabs;
const els: any[] = [];
let root = document.getElementById("root");

let useLocalStorage = createUseLocalStorage("app");

function Content() {
  let [activeTab, setActiveTab] = useLocalStorage("activeTab", "0");

  return (
    <Tabs
      defaultActiveKey={activeTab}
      onChange={(key) => {
        setActiveTab(key);
      }}
    >
      {els.map((el, i) => {
        let contents = el.innerHTML;
        let mp3 = el.dataset.mp3;
        let lrxDoc: LRXDocument = parser.parse(contents.replace(/^\s+/, ""));
        return (
          <TabPane tab={lrxDoc.title.title} key={i}>
            <LRX doc={lrxDoc} audioUrl={mp3} />
          </TabPane>
        );
      })}
      Content of Tab Pane 1
    </Tabs>
  );
}

document.querySelectorAll('script[type="text/lrx"]').forEach((el) => {
  els.push(el);
});
render(<Content />, root);
