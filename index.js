const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200,{'content-Type':'application\json'});
    res.write(JSON.stringify({name:'Rohit Sharma',email:'rohitsharma@gmail.com'}));
    res.end()
}).listen(5000);
