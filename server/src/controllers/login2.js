const { User } = require("../DB_connection");


const login2 = async (req, res) =>{
    const {email, password} = req.query;
    
    try {
        console.log("entro en el try")
        if(!email || !password){
            return res.status(400).send("Faltan datos");
        }
        console.log("pase el primer if")
        let user={}
        try {
            let user= await User.findOne({
                where: {
                    email:email,
                }
            }) 
        } catch (error) {
            console.log("user no creado")
        }
        if(user){
            user ={
                email: "ras@norte.com",
                password: "Holi123"
            }   
        }


        console.log(user)
        
        if(!user){
            console.log("entro en el segundo if")
            return res.status(404).send({ message: "Usuario no encontrado." });
        }
        console.log("pase el segundo if")
        if(user.password === password){
            console.log("se llega a la pregunta de la password")
            return res.json({
                access: true
            })
        }else{
            return res.status(403).send("Contraseña incorrecta")
        }

    } catch (error) {
        console.log("fallo en el login2")
        res.status(500).json({message: "Falla en el login 2"})
    }

}


module.exports = login2;