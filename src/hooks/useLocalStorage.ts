import { useEffect, useState } from "react";

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
  let [v, setV] = useState<T>(initialState);

  useEffect(() => {
    const raw = localStorage.getItem(key) || JSON.stringify(initialState);
    setV(JSON.parse(raw));
  }, []);

  useEffect(() => {
    if (v !== initialState) {
      localStorage.setItem(key, JSON.stringify(v));
    } else {
      localStorage.removeItem(key);
    }
  }, [v]);

  return [v, setV];
}
