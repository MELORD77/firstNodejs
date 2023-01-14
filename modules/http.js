const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Me message</h1>
    <form method="post" action="/" >
    <input name="title" type="text"/>
    <button type="submit">send</button>
    </form>`);
  }
});
server.listen(5000, () => {
  console.log("server 5000");
});
module.exports = server;
