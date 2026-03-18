import { useEffect, useState } from "react";

function ISSPass() {
  const [passes, setPasses] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/iss/pass")
    .then((res) => res.json())
    .then((data) => setPasses(data.response));
}, []);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-green-400 mb-3">
        🛰 Next ISS Pass
      </h2>

      {passes.map((pass, index) => (
        <p key={index}>{new Date(pass.risetime * 1000).toLocaleString()}</p>
      ))}
    </div>
  );
}

export default ISSPass;
