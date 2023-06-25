const {Router} = require("express");

const {getCharById} = require("../controllers/getCharById");
const {getCharDetails} = require("../controllers/getDetails");
//const {login} = require("../controllers/login");
const {login2} = require("../controllers/login2")
//const {postFav} = require("../controllers/postFav");
//const {deleteFav} = require("../controllers/deleteFav");
const {postFav, deleteFav} = require("../controllers/myFavorites");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login2);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);




module.exports = router;