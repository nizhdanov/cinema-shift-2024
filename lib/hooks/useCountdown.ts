import { useState, useEffect } from 'react';

const useCountdown = (timeInMs: number) => {
  const [seconds, setSeconds] = useState(timeInMs / 1000);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { seconds, isRunning };
};

export { useCountdown };
