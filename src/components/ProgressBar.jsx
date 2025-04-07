import { useEffect, useState } from "react";

export default function ProgressBar({ timerDuration }) {
  const [remainingTime, setRemainingTime] = useState(timerDuration);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(">>> interval set");

      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () => {
      console.log(">>> interval cleared");
      clearInterval(timer);
    };
  }, []);

  return <progress value={remainingTime} max={timerDuration} />;
}
