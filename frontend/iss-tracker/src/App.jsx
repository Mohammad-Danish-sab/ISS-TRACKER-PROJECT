import ISSCard from "./components/ISSCard";
import Astronauts from "./components/Astronauts";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-400 mb-10">
        🚀 ISS Tracker Dashboard
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8">
        <ISSCard />
        <Astronauts />
      </div>
    </div>
  );
}

export default App;
