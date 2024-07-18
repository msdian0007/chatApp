import { environment } from "../environment";

let server = "";
let socket = "";
if (environment.stage === "local") {
  server = "http://localhost:3000/api";
  socket = "http://localhost:3001";
} else if (environment.stage === "local-ip") {
  server = "http://192.168.96.183:3000/api";
  socket = "http://192.168.96.183:3001";
} else {
  server = "";
  socket = "";
}

const baseUrl = Object.freeze({
  server,
  socket,
});

export const baseURL = baseUrl;
