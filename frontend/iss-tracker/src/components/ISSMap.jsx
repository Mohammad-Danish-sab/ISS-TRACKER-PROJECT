import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ISSMap({ lat = 0, lng = 0 }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-xl">
      <h2 className="text-lg text-green-400 mb-3">🌍 ISS Live Map</h2>

      <MapContainer center={[lat, lng]} zoom={3} className="h-72 rounded-xl">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[lat, lng]}>
          <Popup>🚀 ISS Current Position</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ISSMap;
