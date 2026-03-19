import ISSCard from "./components/ISSCard";
import Astronauts from "./components/Astronauts";
import ISSMap from "./components/ISSMap";
import Stats from "./components/Stats";
import ISSPass from "./components/ISSPass";
import SpeedCard from "./components/SpeedCard";
import Distance from "./components/Distance";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
        }}
      ></div> */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-green-400 mb-12">
          🚀 ISS Tracker Dashboard
        </h1>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <ISSCard />
          <Astronauts />
          <Stats />
          <ISSPass />
          <SpeedCard />
          <Distance />
        </div>

        {/* map */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-xl">
          <h2 className="text-xl font-semibold text-green-400 mb-4">
            🌍 Live ISS Map
          </h2>

          <ISSMap />
        </div>
      </div>
    </div>
  );
}

export default App;
