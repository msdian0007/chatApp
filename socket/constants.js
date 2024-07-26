
let url = "";
if (process.env.stage === "local") {
  url = "http://localhost:5173/chatApp";
} else if (process.env.stage === "local-ip") {
  url = "http://192.168.192.183:5173/chatApp";
} else if(process.env.stage === "prod"){
  url = process.env.baseUrl;
}
const baseUrl = Object.freeze({
  url,
});

exports.baseURL = baseUrl.url;
