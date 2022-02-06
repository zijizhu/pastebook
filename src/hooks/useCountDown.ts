import { useState, useEffect } from 'react';

export function useCountDown(startValue: number) {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((prev) => {
        if (prev <= 1 || prev === startValue) return startValue;
        return prev - 1;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [value, startValue]);

  function start() {
    setValue((prev) => prev - 1);
  }

  return { value, start, started: value !== startValue };
}
