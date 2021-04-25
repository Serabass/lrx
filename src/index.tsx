import React from "react";
import { render } from "react-dom";
import { Tabs } from "antd";
import parser from "./parser.pegjs";
import LRX from "./LRX/LRX";
import { LRXDocument } from "./common/types";
import { createUseLocalStorage } from "./hooks/useLocalStorage";
import { If } from "./common/if";
import LRXEditor from "./LRX/LRXEditor";
import Sandbox from "./Sandbox";

const { TabPane } = Tabs;
const els: any[] = [];
let root = document.getElementById("root");
let rough = document.getElementById("rough");

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
// render(<Sandbox />, rough);
