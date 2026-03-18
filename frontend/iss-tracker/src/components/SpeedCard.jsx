function SpeedCard() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-green-400 mb-3">🛰 ISS Speed</h2>

      <p className="text-3xl text-green-300">27,600 km/h</p>

      <p className="text-gray-400 text-sm mt-2">Average orbital velocity</p>
    </div>
  );
}

export default SpeedCard;
