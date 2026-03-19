import { useEffect, useState } from "react";
import axios from "axios";

function ISSCard() {
  const [location, setLocation] = useState(null);
  const [flag, setFlag] = useState("");


  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8000/iss/location")
        .then((res) => res.json())
        .then((data) => setLocation(data));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  if (location.country) {
    fetch(`https://restcountries.com/v3.1/name/${location.country}`)
      .then((res) => res.json())
      .then((data) => {
        setFlag(data[0].flags.png);
      });
  }
}, [location]);

  if (!location) return <p>Loading...</p>;

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
      <h2 className="text-xl font-bold text-green-400 mb-4">🌍 ISS Location</h2>

      <p className="text-gray-300 mb-2">Latitude: {location.latitude}</p>

      <p className="text-gray-300 mb-2">Longitude: {location.longitude}</p>

      <p className="text-xs text-gray-500">Updated every 5 seconds</p>

      <p className="text-gray-300">🌍 Country: {location.country}</p>

      <p>🌦 Weather: {location.weather.weather}</p>
      <p>🌡 Temp: {location.weather.temperature}°C</p>
      <p>💨 Wind: {location.weather.wind} m/s</p>

      <p className="text-gray-400 text-sm mt-2">
        Updated: {new Date(location.timestamp * 1000).toLocaleTimeString()}
      </p>
      <div className="flex items-center gap-2 mt-2">
        <p>🌍 Country: {location?.country || "Loading..."}</p>

        {flag && <img src={flag} alt="flag" className="w-6 h-4" />}
      </div>
      <p className="mt-2">🌦 {location.weather?.weather}</p>

      <p>🌡 {location.weather?.temperature} °C</p>

      <p>💨 {location.weather?.wind} m/s</p>

      <p className="text-sm text-gray-400 mt-2">
        Updated: {new Date(location.timestamp * 1000).toLocaleTimeString()}
      </p>
    </div>
  );
}

export default ISSCard;
