import React from "react";

export interface LRXContextType {
  transpose: number;
  setTranspose(value: number): void;
}

export const LRXContext = React.createContext<LRXContextType>({
  transpose: 0,
  setTranspose(value) {
    this.transpose = value;
  }
});
