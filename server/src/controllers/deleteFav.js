const {Favorite} = require("../DB_connection");


const deleteFav = async (req, res) =>{

    try {
        
        const {id} = req.params;

        //eliminamos el registro
        await Favorite.destroy({ 
            where: { id:id }
        })

        //buscamos a los registros restantes
        const allFavorites = await Favorite.findAll()

        //retornamos
        return res.json(allFavorites)

    } catch (error) {
        
        res.status(500).json(error.message)
    }

}

module.exports ={deleteFav};