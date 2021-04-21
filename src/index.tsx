import React from "react";
import { render } from "react-dom";
import LRX from "./LRX";
import { Tabs } from "antd";
import { LRXDocument } from "./types";
// @ts-ignore
import parser from "./parser.pegjs";
import { createUseLocalStorage } from "./useLocalStorage";
import { If } from "./if";
import LRXEditor from "./LRXEditor";

const { TabPane } = Tabs;
const els: any[] = [];
let root = document.getElementById("root");

let useLocalStorage = createUseLocalStorage("lrx:app");

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
        let editable = el.dataset.editable === "true";
        let source = contents.replace(/^\s+/, "");
        let lrxDoc: LRXDocument = parser.parse(source);
        return (
          <TabPane tab={lrxDoc.title.title} key={i}>
            <If condition={editable}>
              <LRXEditor source={source} audioUrl={mp3} />
            </If>
            <If condition={!editable}>
              <LRX doc={lrxDoc} audioUrl={mp3} />
            </If>
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
