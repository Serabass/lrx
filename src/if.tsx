export interface IfProps {
  condition: boolean | (() => boolean);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export function If({ condition, children }: IfProps) {
  let result;
  if (typeof condition === 'function') {
    result = condition();
  } else {
    result = condition;
  }
  return result ? children : null;
}
