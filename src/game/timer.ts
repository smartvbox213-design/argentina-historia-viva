import { useEffect, useRef, useState } from "react";

interface TimerOptions {
  /** Restarting key: when it changes the timer resets. */
  resetKey: string;
  duration: number;
  onExpire: () => void;
  onTick?: () => void;
}

/** 15s card timer, decoupled from the view. Stops on answer (via stop()). */
export function useGameTimer({ resetKey, duration, onExpire, onTick }: TimerOptions) {
  const [remaining, setRemaining] = useState(duration);
  const stopped = useRef(false);
  const expire = useRef(onExpire);
  const tick = useRef(onTick);
  expire.current = onExpire;
  tick.current = onTick;

  useEffect(() => {
    stopped.current = false;
    setRemaining(duration);
    const id = setInterval(() => {
      tick.current?.();
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          if (!stopped.current) {
            stopped.current = true;
            expire.current();
          }
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [resetKey, duration]);

  const stop = () => {
    if (stopped.current) return false;
    stopped.current = true;
    return true;
  };

  return { remaining, progress: (remaining / duration) * 100, stop };
}
