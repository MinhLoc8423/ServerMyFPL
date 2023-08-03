var modelProduct = require("../models/exam");
var express = require("express");
var router = express.Router();

//http://localhost:3000/exam
router.get("/", async function (req, res, next) {
  var data = await modelProduct.find();
  res.json(data);
});

router.get("/cours", async function (req, res, next) {
  try {
    const data = await modelProduct.find().populate("course_id");
    res.json(data);
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu." });
  }
});

module.exports = router;
