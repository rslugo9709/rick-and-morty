//importamos las librerias necesarias
const express = require("express");
//declaramos el puerto de salida
const PORT = 3001;
//declaramos el server
const server = express();

//traemos al router
const router = require("./routes/index.js")

//importamos la base de datos
const { conn } = require('./DB_connection');

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



//le decimos al server que escuche los cambios despues de haber levantado la base de datos

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised");
  });
});




