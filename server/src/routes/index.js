const {Router} = require("express");

const {getCharById} = require("../controllers/getCharById");
const {getCharDetails} = require("../controllers/getDetails");
const {login} = require("../controllers/login");
const {postFav, deleteFav} = require("../controllers/myFavorites");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);




module.exports = router;