import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getISSLocation = () => API.get("/iss/location");

export const getAstronauts = () => API.get("/iss/astronauts");
