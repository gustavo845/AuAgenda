const router =require("express").Router();

//rotas de usuario
const userRoutes = require("./userRoutes")

router.use('/user', userRoutes);

//rotas de animal

const animalRoutes = require("./animalRoutes");

router.use('/animal', animalRoutes);

module.exports = router;