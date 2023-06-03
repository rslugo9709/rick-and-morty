//importamos las librerias necesarias
const express = require("express");
//declaramos el puerto de salida
const PORT = 3001;
//declaramos el server
const server = express();

//traemos al router
const router = require("./routes/index.js")

server.use((req, res, next) =>{
    //aplicamos los middleware
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//le decimos que envie la respuesta en formato JSON
server.use(express.json());

server.use("/rickandmorty", router )
//le decimos al server que use el router



//le decimos al server que escuche los cambios
server.listen(PORT, () =>{
    console.log("server listening on port: " + PORT);
})





