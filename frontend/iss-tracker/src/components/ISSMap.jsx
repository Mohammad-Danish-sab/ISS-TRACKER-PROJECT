import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ISSMap() {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    const fetchISS = async () => {
      try {
        const res = await fetch("http://localhost:8000/iss/location");
        const data = await res.json();

        if (data?.latitude && data?.longitude) {
          setPosition([data.latitude, data.longitude]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchISS();

    const interval = setInterval(fetchISS, 5000); // update every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">🗺️ ISS Live Map</h2>

      <MapContainer
        center={position}
        zoom={2}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>🚀 ISS Current Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ISSMap;
