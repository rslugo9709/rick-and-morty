
const {User} = require("../DB_connection");
//no se trae sequelize porque el user ya trae el sequelize
const postUser = async(req, res) =>{
    
    try {

        const {email, password} = req.body;

        if(!email || !password){
            res.status(400).send("Faltan datos")
        }

        const [user] = await findOrCreate({
            where: {
                email: email, 
                password: password
            },
            defaults:{
                password: "Holi123"
            }
        })

        return res.status(200).json(user)

    } catch (error) {
        console.log("fallo en el postuser")
        return res.status(500).json({message: error.message})
    }

}


module.exports = postUser;
