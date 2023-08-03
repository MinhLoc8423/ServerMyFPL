var modelProduct = require("../models/internship");
var express = require("express");
var router = express.Router();

//http://localhost:3000/internship
router.get("/", async function (req, res, next) {
  var data = await modelProduct.find();
  res.json(data);
});

module.exports = router;
