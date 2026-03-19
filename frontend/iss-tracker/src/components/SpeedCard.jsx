import { useEffect, useState } from "react";

function ISSSpeed() {
  const [speed, setSpeed] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const fetchISS = async () => {
      try {
        const res = await fetch("http://localhost:8000/iss/location");
        const data = await res.json();

        if (!data) return;

        const current = {
          lat: data.latitude,
          lon: data.longitude,
          time: Date.now(),
        };

        if (prev) {
          const distance = getDistance(
            prev.lat,
            prev.lon,
            current.lat,
            current.lon,
          );

          const timeDiff = (current.time - prev.time) / 1000; // seconds

          const speedKmH = (distance / timeDiff) * 3600;

          setSpeed(speedKmH.toFixed(2));
        }

        setPrev(current);
      } catch (err) {
        console.error(err);
      }
    };

    fetchISS();
    const interval = setInterval(fetchISS, 5000);

    return () => clearInterval(interval);
  }, [prev]);

  // 🌍 Haversine Formula
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">⚡ ISS Speed</h2>

      <p className="text-2xl text-green-400">
        {speed ? `${speed} km/h` : "Calculating..."}
      </p>
    </div>
  );
}

export default ISSSpeed;
