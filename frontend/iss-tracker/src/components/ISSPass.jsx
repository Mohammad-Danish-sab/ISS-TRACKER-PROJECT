import { useEffect, useState } from "react";

function ISSPass() {
  const [passes, setPasses] = useState([]); // ✅ FIX

  useEffect(() => {
    fetch("http://localhost:8000/iss/pass")
      .then((res) => res.json())
      .then((data) => {
        setPasses(data.passes || []); // ✅ extra safety
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">ISS Pass Times</h2>

      {passes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        passes.map((pass, index) => (
          <div key={index} className="mb-2">
            <p>Rise Time: {new Date(pass.risetime * 1000).toLocaleString()}</p>
            <p>Duration: {pass.duration} sec</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ISSPass;
