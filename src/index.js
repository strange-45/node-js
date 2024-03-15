const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req received\n`;
  fs.appendFile("./src/log.txt", log, (error, data) => {
    if (error) {
      console.error("Error writing to log file:", error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    } else {
      res.end("Hello from Server");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started"));
