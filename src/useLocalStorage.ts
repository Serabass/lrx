import { useState } from "react";

/**
 * Returns a hook for LocalStorage values
 *
 * @param prefix A prefix
 */
export function createUseLocalStorage(prefix: any) {
  return (key: any, initialState: any) =>
    useStateWithLocalStorage(`${prefix}::${key}`, initialState);
}

/**
 * Use state value from LocalStorage
 * @param key
 * @param initialState
 */
export function useStateWithLocalStorage(key: any, initialState: any) {
  let item = localStorage.getItem(key);
  let value;
  if (!item) {
    value = typeof initialState === "function" ? initialState() : initialState;
  } else {
    value = JSON.parse(item);
  }

  let [v, setV] = useState(value);

  return [
    v,
    (val: any) => {
      localStorage.setItem(key, JSON.stringify(val));
      setV(val);
    }
  ];
}
