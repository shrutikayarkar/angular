var express = require("express");
var router = express.Router();

router.use("/",require("../controller/home"));
router.use("/signup",require("../controller/signup"));
router.use("/login",require("../controller/login"));
router.use("/admin",require("../controller/admin"));
router.use("/admin/dashboard",require("../controller/admin/dashboard"));

module.exports = router;