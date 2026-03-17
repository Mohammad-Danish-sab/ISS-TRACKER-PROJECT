import ISSCard from "./components/ISSCard";
import Astronauts from "./components/Astronauts";
import ISSMap from "./components/ISSMap";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-green-400 mb-12">
          🚀 ISS Tracker Dashboard
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ISSCard />
          <Astronauts />

          <div className="md:col-span-2 lg:col-span-1">
            <ISSMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
