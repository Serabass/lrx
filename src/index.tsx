import React from "react";
import { render } from "react-dom";
import LRX from "./LRX";

document.querySelectorAll('script[type="text/lrx"]').forEach((el) => {
  let contents = el.innerHTML;
  let pre = document.createElement("pre");
  el.replaceWith(pre);
  render(<LRX contents={contents} />, pre);
});
