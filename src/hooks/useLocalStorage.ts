import { useState } from "react";

type StateWithLocalStorage<T> = [T, (val: T) => void];
type UseStateWithLocalStorage = <TT>(
  key: string,
  initialState: TT
) => StateWithLocalStorage<TT>;

/**
 * Returns a hook for LocalStorage values
 *
 * @param prefix A prefix
 */
export function createUseLocalStorage(
  prefix: string
): UseStateWithLocalStorage {
  return <T>(key: string, initialState: T) =>
    useStateWithLocalStorage<T>(`${prefix}::${key}`, initialState);
}

/**
 * Use state value from LocalStorage
 * @param key
 * @param initialState
 */
export function useStateWithLocalStorage<T>(
  key: string,
  initialState: T
): StateWithLocalStorage<T> {
  let item = localStorage.getItem(key);
  let value;
  if (!item) {
    value = typeof initialState === "function" ? initialState() : initialState;
  } else {
    value = JSON.parse(item);
  }

  let [v, setV] = useState<T>(value);

  return [
    v,
    (val: T) => {
      localStorage.setItem(key, JSON.stringify(val));
      setV(val);
    }
  ];
}
