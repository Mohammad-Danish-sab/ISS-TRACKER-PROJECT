function ISSStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-800 p-4 rounded-xl text-center">
        <p className="text-gray-400 text-sm">Speed</p>
        <p className="text-green-400 font-bold">27,600 km/h</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl text-center">
        <p className="text-gray-400 text-sm">Altitude</p>
        <p className="text-green-400 font-bold">408 km</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl text-center">
        <p className="text-gray-400 text-sm">Orbit Time</p>
        <p className="text-green-400 font-bold">90 min</p>
      </div>
    </div>
  );
}

export default ISSStats;
