let myFavorites = [];

function postFav(req,res){
    const character = req.body;

    try{
        myFavorites.push(character);
        res.status(200).json(myFavorites);
    }catch(err){
        res.status(500).json({message:err});
    }
}

function deleteFav(req,res){
    const {id} = req.params;

    try{
        const filtered = myFavorites.filter(
            (char) => char.id !== Number(id)
        )
        myFavorites= filtered;
        res.status(200).json(myFavorites);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {postFav,deleteFav};


