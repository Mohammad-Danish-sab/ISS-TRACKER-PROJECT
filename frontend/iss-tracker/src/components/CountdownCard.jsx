import { useEffect, useState } from "react";

function CountdownCard({ pass }) {
  const [timeLeft, setTimeLeft] = useState(
    pass.risetime * 1000 - Date.now()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(pass.risetime * 1000 - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [pass]);

  const seconds = Math.max(0, Math.floor(timeLeft / 1000));

  return (
    <div className="mb-4 p-3 border rounded">
      <p>
        🚀 Pass Time:{" "}
        {new Date(pass.risetime * 1000).toLocaleString()}
      </p>

      <p>⏳ Countdown: {seconds} sec</p>

      <p>🕒 Duration: {pass.duration} sec</p>
    </div>
  );
}

export default CountdownCard;