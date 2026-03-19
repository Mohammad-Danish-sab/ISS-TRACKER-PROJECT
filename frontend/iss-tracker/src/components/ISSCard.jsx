import { useEffect, useState } from "react";

function ISSCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/iss/location");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">🚀 ISS Location</h2>

      <p>Latitude: {data?.latitude ?? "Loading..."}</p>
      <p>Longitude: {data?.longitude ?? "Loading..."}</p>
      <p>Country: {data?.country ?? "Ocean 🌊"}</p>
    </div>
  );
}

export default ISSCard;

