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
    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-80 text-center hover:scale-105 transition duration-300">
      <h2 className="text-xl font-bold text-green-400 mb-4">🌍 ISS Location</h2>

      <p className="text-gray-300 mb-2">Latitude: {location.latitude}</p>

      <p className="text-gray-300 mb-2">Longitude: {location.longitude}</p>

      <p className="text-xs text-gray-500">Updated every 5 seconds</p>
    </div>
  );
}

export default ISSCard;
