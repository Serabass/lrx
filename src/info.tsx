import React from "react";
import p from "pegjs";
import { Rate } from "antd";
import { LRXGeneralLineEntry, LRXReportLine } from "./common/types";

export interface InfoProps {
  activeEntry?: LRXGeneralLineEntry;
  activeReportLines: LRXReportLine[];
}

export function Info({ activeEntry, activeReportLines }: InfoProps) {
  return (
    <div>
      {activeEntry ? (
        <pre>
          <h3>
            #{activeEntry._id}
            <span style={{ float: "right" }}>
              <Rate value={activeEntry.bm?.rate?.rate ?? 0} disabled />
              {activeEntry.bm?.rate?.rate ?? 0}
            </span>
          </h3>
          <p>{activeEntry.content}</p>

          <hr />

          <ul>
            {activeReportLines.map((line, i) => {
              return (
                <li key={i}>
                  ~{line.n} {line.text}
                </li>
              );
            })}
          </ul>
        </pre>
      ) : null}
    </div>
  );
}
