const router = require("express").Router();
const AnimalController = require("../controllers/AnimalController");
const AnimalModel = require("../models/AnimalModel");

router.route("/create").post((req, res) => AnimalController.create(req, res));

router.route("/").get((req, res) => AnimalController.getall(req, res));

router.route("/:id").get((req, res) => AnimalController.get(req, res));

router.route("/:id").delete((req, res) => AnimalController.delete(req, res));

router.route("/:id").put((req, res) => AnimalController.update(req, res));

module.exports = router;