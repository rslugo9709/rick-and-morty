const users = require("../utils/user.js");


function login(req, res){
    const {email, password} = req.query;


    try {
        const exists = users.find(
            (user) => user.email === email && user.password === password
        )
        const access = false;
        if(exists){
            access = true;
        }
        res.status(200).json({access});
    } catch (err) {
        res.status(500).json({message: err.message})
    }


}

module.exports = {login};