import React from "react";
import { render } from "react-dom";
import App from "./App";
import LRX from './LRX';

const root = document.getElementById("root");
render(<App />, root);

document.querySelectorAll('script[type="text/lrx"]').forEach((el) => {
    let contents = el.innerHTML;
    let pre = document.createElement('pre');
    el.replaceWith(pre);
    render(<LRX contents={contents} />, pre);
})
