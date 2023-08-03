var modelProduct = require("../models/course");
var express = require("express");
var router = express.Router();

//http://localhost:3000/course
router.get("/", async function (req, res, next) {
  var data = await modelProduct.find();
  res.json(data);
});

module.exports = router;
