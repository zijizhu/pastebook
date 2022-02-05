import { useState, useEffect } from 'react';

export function useCountDown(startValue: number) {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    console.log('useeffect called');
    const timer = setTimeout(() => {
      setValue((prev) => {
        if (prev <= 1 || prev === startValue) return startValue;
        return prev - 1;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [value, startValue]);

  function start() {
    console.log('start called');
    setValue((prev) => prev - 1);
  }

  return { value, start };
}
