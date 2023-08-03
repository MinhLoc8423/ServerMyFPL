var modelProduct = require("../models/news");
var express = require("express");
var router = express.Router();

//http://localhost:3000/news
router.get("/", async function (req, res, next) {
  var data = await modelProduct.find();
  res.json(data);
});

module.exports = router;
