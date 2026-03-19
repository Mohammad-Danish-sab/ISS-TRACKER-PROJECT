import { useEffect, useState } from "react";

function Distance() {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const userLat = pos.coords.latitude;
      const userLon = pos.coords.longitude;

      fetch("http://localhost:8000/iss/location")
        .then((res) => res.json())
        .then((data) => {
          const d = getDistance(
            userLat,
            userLon,
            data.latitude,
            data.longitude,
          );

          setDistance(d.toFixed(0));
        });
    });
  }, []);

  return (
    <div className="bg-white/10 p-6 rounded-2xl">
      <h2>📏 Distance from You</h2>
      <p>{distance} km</p>
    </div>
  );
}

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(a));
}

export default Distance;
