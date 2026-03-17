import { useEffect, useState } from "react";
import { getISSLocation } from "../services/api";

export default function useISSLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getISSLocation().then((res) => setLocation(res.data));
  }, []);

  return location;
}
