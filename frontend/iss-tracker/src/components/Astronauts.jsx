import { useEffect, useState } from "react";
import axios from "axios";

function Astronauts() {
  const [data, setData] = useState(null);

  const fetchAstronauts = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/iss/astronauts");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching astronauts");
    }
  };

  useEffect(() => {
    fetchAstronauts();
  }, []);

  if (!data) return <p>Loading...</p>;

    if (data.error) {
      return (
        <div className="bg-red-500 p-4 rounded-lg">
          <p>{data.error}</p>
        </div>
      );
    }

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-80 hover:scale-105 transition duration-300">
      <h2 className="text-xl font-bold text-blue-400 mb-4">
        🧑‍🚀 Astronauts ({data.number})
      </h2>

      <ul className="space-y-2">
        {data.people.map((person, index) => (
          <li key={index} className="bg-gray-700 p-2 rounded-lg text-gray-200">
            {person.name} ({person.craft})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Astronauts;
