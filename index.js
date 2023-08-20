require('dotenv').config()
const http = require("http")


function requestController(req,res){
  const url = req.url
  const method = req.method
  
  if (method === "GET" && url === "/"){
     res.setHeader("Content-type","text/html; charset=utf-8",)
     res.write("<h1>Hola mundo desde la página principal<h1>")
     res.end()
     return
  }

  console.log("Recibimos una nueva request!!!")
}

const server =  http.createServer(requestController)

const PORT =  process.env.PORT

server.listen( PORT,function(){
    console.log("Aplicación corriendo en puerto: " + PORT)
})