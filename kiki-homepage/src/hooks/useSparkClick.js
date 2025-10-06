import { useCallback } from 'react';

export const useSparkClick = (onSparkTrigger) => {
  const handleClick = useCallback((e) => {
    if (onSparkTrigger) {
      onSparkTrigger(e);
    }
  }, [onSparkTrigger]);

  return handleClick;
};

