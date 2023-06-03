//es casi lo mismo que en getcharbyid
const axios = require("axios");
const url ="https://rickandmortyapi.com/api/character/";


async function getCharDetails(req, res){
    const {id} = req.params;

    try {
        const response = (await axios.get(url+id)).data;
        console.log(response)
        const character = {
            id: response.id,
            name: response.name,
            gender: response.gender,
            species: response.species,
            image: response.image,
            origin: response.origin
        }
        res.status(200).json(character)
    } catch (err) {
        res.status(500).json({message: err.message})
    }



}

module.exports= {getCharDetails}