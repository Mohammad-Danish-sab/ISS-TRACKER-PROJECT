import { useEffect, useState } from "react";
import axios from "axios";

function ISSCard() {
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/iss/location");
      setLocation(res.data);
    } catch (error) {
      console.error("Error fetching ISS location");
    }
  };

  useEffect(() => {
    fetchLocation();
    const interval = setInterval(fetchLocation, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!location) return <p>Loading...</p>;

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
      <h2 className="text-xl font-bold text-green-400 mb-4">🌍 ISS Location</h2>

      <p className="text-gray-300 mb-2">Latitude: {location.latitude}</p>

      <p className="text-gray-300 mb-2">Longitude: {location.longitude}</p>

      <p className="text-xs text-gray-500">Updated every 5 seconds</p>

      <p className="text-gray-300">🌍 Country: {location.country}</p>

      <p className="text-gray-400 text-sm mt-2">
        Updated: {new Date(location.timestamp * 1000).toLocaleTimeString()}
      </p>
    </div>
  );
}

export default ISSCard;
