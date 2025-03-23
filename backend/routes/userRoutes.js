const router = require("express").Router();
const UserController = require("../controllers/UserController")

router.route("/create").post((req, res) => UserController.create(req, res));

router.route("/").get((req, res) => UserController.getall(req, res));

router.route("/:id").get((req, res) => UserController.get(req, res));

router.route("/:id").delete((req,res)=> UserController.delete(req, res));

router.route("/:id").put((req,res)=> UserController.update(req, res));
module.exports = router;