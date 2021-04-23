import React from "react";
import {
  LRXDocumentBlock,
  LRXGeneralLineEntry,
  OnEntryClickedCallback
} from "../common/types";
import { LRXLine } from "./LRXLine";
import { Progress, Typography } from "antd";

export function LRXBlock({
  maxRate,
  block,
  onEntryClicked = () => {},
  activeEntry,
  currentTime = 0,
  transpose = 0
}: {
  maxRate: number;
  block: LRXDocumentBlock;
  onEntryClicked: OnEntryClickedCallback;
  activeEntry?: LRXGeneralLineEntry;
  currentTime?: number;
  transpose?: number;
}) {
  let timeHighlightedLine = block.body.find((line) => {
    if (!line.timecode?.start || !line.timecode?.end) {
      return false;
    }

    return (
      line.timecode.start.value < currentTime &&
      line.timecode.end.value > currentTime
    );
  });
  return (
    <div className="lrx-block">
      <Progress percent={(block.avgRate / maxRate) * 100} />
      <Typography.Title level={4}>
        [{block.header.title}]
        {block.avgRate > 0 ? <sup>{block.avgRate}</sup> : null}
      </Typography.Title>
      <Typography.Paragraph>
        {block.body.map((line, i) => {
          return (
            <LRXLine
              line={line}
              timeHighlight={timeHighlightedLine === line}
              key={i}
              transpose={transpose}
              currentTime={currentTime}
              activeEntry={activeEntry}
              onEntryClicked={(entry) => {
                onEntryClicked(entry);
              }}
            />
          );
        })}
      </Typography.Paragraph>
    </div>
  );
}
