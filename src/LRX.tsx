import {hot} from "react-hot-loader";
import React from "react";
// @ts-ignore
import parser from './parser.pegjs';
import './lrx.sass';

const LRX = ({contents}: any) => {
    let lrxDoc = parser.parse(contents.replace(/^\s+/));
    return <pre className="lrx-document">
        <h1>{lrxDoc.title.title}</h1>

        {lrxDoc.blocks.map((block: any, i: number) => <LRXBlock block={block} key={i} />)}
        {JSON.stringify(lrxDoc, null, 4)}
    </pre>;
};

export function LRXBlock({block}: any) {
    return <div>
        <h3>[{block.header.title}]</h3>
        {block.body.map((line: any, i: number) => <LRXLine line={line} key={i} />)}
    </div>
}

export function LRXLine({line}: any) {
    switch (line.type) {
        case 'EMPTY_LINE':
            return <p></p>;

        case 'CHORDS_LINE':
            return <LRXChordLine line={line} />;

        case 'LINE':
            return <LRXLyricsLine line={line} />;

        default:
            return <p>UNK: {line.type}</p>
    }
}

export function LRXChordLine({line}: any) {
    return <p>
        {line.chords.map((chord: any, i: number) => <span className="chord" key={i}>
            {chord.space.start}{chord.note}{chord.mod || ''}{chord.suffix || ''}{chord.space.end}
        </span>)}
    </p>
}

export function LRXLyricsLine({line}: any) {
    return <p>
        {line.content.map((entry: any, i: number) => <span key={i}>{entry.content}</span>)}
    </p>
}

export default hot(module)(LRX);
