import ISSCard from "../components/ISSCard";
import Astronauts from "../components/Astronauts";

function Dashboard() {
  return (
    <div className="flex gap-6">
      <ISSCard />
      <Astronauts />
    </div>
  );
}

export default Dashboard;
