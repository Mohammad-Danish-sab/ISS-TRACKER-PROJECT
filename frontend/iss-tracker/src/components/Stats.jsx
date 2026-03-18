import { useEffect, useState } from "react";

function Stats() {
  const [speed, setSpeed] = useState(27600);
  const [altitude, setAltitude] = useState(408);

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-green-400 mb-4">📊 ISS Stats</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Speed</span>
          <span className="text-green-400">{speed} km/h</span>
        </div>

        <div className="flex justify-between">
          <span>Altitude</span>
          <span className="text-green-400">{altitude} km</span>
        </div>

        <div className="flex justify-between">
          <span>Orbit Time</span>
          <span className="text-green-400">90 min</span>
        </div>
      </div>
    </div>
  );
}

export default Stats;
