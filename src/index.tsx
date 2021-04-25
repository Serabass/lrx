import React from "react";
import { render } from "react-dom";
import Content from "./LRX/Content";

const els: any[] = [];
let root = document.getElementById("root");

document.querySelectorAll('script[type="text/lrx"]').forEach((el) => {
  els.push(el);
});
render(<Content els={els} />, root);
// render(<Sandbox />, rough);
