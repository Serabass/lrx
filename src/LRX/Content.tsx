import { Tabs } from "antd";
import { LRXDocument } from "../common/types";
import parser from "../parser.pegjs";
import { If } from "../common/if";
import LRXEditor from "./LRXEditor";
import LRX from "./LRX";
import React from "react";
import { hot } from "react-hot-loader";
import { createUseLocalStorage } from "../hooks/useLocalStorage";

let useLocalStorage = createUseLocalStorage("lrx:app");

interface ContentProps {
  els: HTMLScriptElement[];
}

function Content({ els }: ContentProps) {
  let [activeTab, setActiveTab] = useLocalStorage("activeTab", "0");

  return (
    <Tabs
      activeKey={activeTab}
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
          <Tabs.TabPane tab={lrxDoc.title.title} key={i}>
            <If condition={editable}>
              <LRXEditor source={source} audioUrl={mp3 ?? ""} />
            </If>
            <If condition={!editable}>
              <LRX doc={lrxDoc} audioUrl={mp3} />
            </If>
          </Tabs.TabPane>
        );
      })}
      Content of Tab Pane 1
    </Tabs>
  );
}

export default hot(module)(Content);
