import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { useEffect, useState } from "react";

function ISSMap() {
  const [position, setPosition] = useState([0, 0]);
  const [path, setPath] = useState([]);

   useEffect(() => {
     const interval = setInterval(() => {
       fetch("http://localhost:8000/iss/location")
         .then((res) => res.json())
         .then((data) => {
           const lat = parseFloat(data.latitude);
           const lon = parseFloat(data.longitude);

           setPosition([lat, lon]);

           setPath((prev) => [...prev, [lat, lon]]);
         });
     }, 5000);

     return () => clearInterval(interval);
   }, []);

  return (
    // <div className="bg-gray-800 p-4 rounded-2xl shadow-xl">
    //   <h2 className="text-lg text-green-400 mb-3">🌍 ISS Live Map</h2>

    <MapContainer center={position} zoom={3} className="h-72 rounded-xl">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={position} />
      {/* orbit path */}
      <Polyline positions={path} color="red" />
    </MapContainer>
  ); 
}

export default ISSMap;
