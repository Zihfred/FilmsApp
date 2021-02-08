import axios from "axios";

const baseURL = "http://localhost:8080/";
const agent = axios.create({
  baseURL,
});

agent.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;
agent.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE,PATCH,OPTIONS";

export default agent;
