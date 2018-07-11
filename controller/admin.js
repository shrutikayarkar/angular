var express = require("express");
var router = express.Router();

router.get("/",function (req,res) {
var pagedata = {title:"admin page",pagename:"admin/index"};
res.render('layout',pagedata);
});


router.get("/dashboard",function (req,res) {
var pagedata = {title:"admin dashboard",pagename:"admin/dashboard"};
res.render('layout',pagedata);
});

module.exports = router;