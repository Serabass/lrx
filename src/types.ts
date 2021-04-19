export interface LRXDocument {
    title: LRXDocumentTitle;
    blocks: LRXDocumentBlock[]
}

export interface LRXDocumentTitle {
    title: string;
}

export interface LRXDocumentBlock {
    avgRate: number;
    header: {
        title: string;
    };
    body: LRXGeneralLine[];
}

export interface LRXGeneralLine {
    type: string;
}

export interface LRXChordSpace {
    start: string;
    end: string;
}

export interface LRXChord {
    space: LRXChordSpace;
    note: string;
    mod: string;
    suffix: string;
}

export interface LRXChordsLine {
    type: 'CHORDS_LINE';
    chords: LRXChord[];
}
