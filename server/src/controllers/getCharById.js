//importamos la libreria necesaria
const axios = require("axios");

//declaramos la url que usaremos
const url ="https://rickandmortyapi.com/api/character/";

async function getCharById(req, res){
    const {id} = req.params;

    try {
        const response = (await axios.get(url+id)).data;
        const character = {
            id: response.id,
            name: response.name,
            gender: response.gender,
            species: response.species,
            image: response.image
        }
        console.log("se ejecuta el getCharID")
        console.log(character)
        res.status(200).json(character)
    } catch (err) {
        res.status(500).json({message: err.message})
    }



}

module.exports= {getCharById}