const http = require("http")

function requestController(){
  console.log("Recibimos una nueva request!!!")
}

const server =  http.createServer(requestController)

server.listen(4000)