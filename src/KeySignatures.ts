import { Enum, EnumValue } from "ts-enums";

export enum KeyType {
  FLAT,
  SHARP
}

export class KeySignature extends EnumValue {
  constructor(
    public majorKey: string,
    public relativeMinor: string,
    public keyType: KeyType,
    public rank: number
  ) {
    super(majorKey);
  }
}

/** Enum for each key signature. */
class KeySignatureEnum extends Enum<KeySignature> {
  public C: KeySignature = new KeySignature("C", "Am", KeyType.SHARP, 0);

  public Db: KeySignature = new KeySignature("Db", "Bbm", KeyType.FLAT, 1);

  public D: KeySignature = new KeySignature("D", "Bm", KeyType.SHARP, 2);

  public Eb: KeySignature = new KeySignature("Eb", "Cm", KeyType.FLAT, 3);

  public E: KeySignature = new KeySignature("E", "C#m", KeyType.SHARP, 4);

  public F: KeySignature = new KeySignature("F", "Dm", KeyType.FLAT, 5);

  public Gb: KeySignature = new KeySignature("Gb", "Ebm", KeyType.FLAT, 6);

  public Fsharp: KeySignature = new KeySignature("F#", "D#m", KeyType.SHARP, 6);

  public G: KeySignature = new KeySignature("G", "Em", KeyType.SHARP, 7);

  public Ab: KeySignature = new KeySignature("Ab", "Fm", KeyType.FLAT, 8);

  public A: KeySignature = new KeySignature("A", "F#m", KeyType.SHARP, 9);

  public Bb: KeySignature = new KeySignature("Bb", "Gm", KeyType.FLAT, 10);

  public B: KeySignature = new KeySignature("B", "G#m", KeyType.SHARP, 11);

  // Unconventional key signatures:

  public Csharp: KeySignature = new KeySignature("C#", "", KeyType.SHARP, 1);

  public Dsharp: KeySignature = new KeySignature("D#", "", KeyType.SHARP, 3);

  public Gsharp: KeySignature = new KeySignature("G#", "", KeyType.SHARP, 8);

  constructor() {
    super();
    this.initEnum("KeySignature");
  }

  /** Returns the enum constant with the specific name. */
  public valueOf(name: string): KeySignature {
    for (let key of this.values) {
      if (
        key.majorKey === name ||
        (key.relativeMinor && key.relativeMinor === name)
      ) {
        return key;
      }
    }
    throw new Error(`${name} is not a valid key signature.`);
  }

  public forRank(rank: number) {
    for (let key of this.values) {
      if (key.rank === rank) {
        return key;
      }
    }
    throw new Error(`${rank} is not a valid rank.`);
  }
}

export const KeySignatures: KeySignatureEnum = new KeySignatureEnum();
