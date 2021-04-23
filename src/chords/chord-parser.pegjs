ChordInfo
 = fingers: StringFingering __ barres: Barre+ __ at: At {
 	return {
    	fingers,
        barres,
        position: at.position
    };
 }

Barre
 = '[' fromString: StringIndex '-' toString: StringIndex  '@' fret: Fret ']' {
 	return {
    	fromString,
        toString,
        fret
    };
 }

At
 = _ 'at' _ position: Fret {
 	return {position}
 }

StringFingering
 = frets: FretIndex+ {
 	return frets //.map((f, i) => [i + 1, f]);
 }

StringIndex
 = [123456] {
 	return parseInt(text())
 }

FretIndex
 = [0-9A-Fx] {
    	return text() === 'x' ? 'x' : parseInt(text(), 16)
    }

Fret
 = [0-9A-F] {
 	return parseInt(text(), 16)
 }

_ = [ \t]*

__ = [ \t]+
