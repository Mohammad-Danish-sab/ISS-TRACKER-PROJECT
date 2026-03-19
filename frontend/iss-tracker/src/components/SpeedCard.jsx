import { useEffect, useState } from "react";

function SpeedCard() {
  const [speed, setSpeed] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8000/iss/location")
        .then((res) => res.json())
        .then((data) => {
          const curr = {
            lat: parseFloat(data.latitude),
            lon: parseFloat(data.longitude),
            time: Date.now(),
          };

          if (prev) {
            const d = getDistance(prev, curr);
            const t = (curr.time - prev.time) / 3600000;
            setSpeed((d / t).toFixed(2));
          }

          setPrev(curr);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, [prev]);

  return (
    <div className="bg-white/10 p-6 rounded-2xl shadow-xl">
      <h2 className="text-green-400">🛰 Speed</h2>
      <p className="text-2xl">{speed} km/h</p>
    </div>
  );
}

function getDistance(a, b) {
  const R = 6371;

  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;

  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

  return 2 * R * Math.asin(Math.sqrt(x));
}

export default SpeedCard;
