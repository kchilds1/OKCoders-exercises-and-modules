const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Testing");
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});