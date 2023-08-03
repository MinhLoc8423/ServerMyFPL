var modelProduct = require("../models/internship");
var express = require("express");
var router = express.Router();

//http://localhost:3000/internship

router.get("/", async function (req, res, next) {
  try {
    const queryParam = req.query.q; 
    if(queryParam){
      var data = await modelProduct.find({time: queryParam});
    }else{
      var data = await modelProduct.find();
    }
    res.json(data);
  } catch (error) {
    console.error("Lỗi khi xử lý dữ liệu:", error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi xử lý dữ liệu." });
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    var data = await modelProduct.findById(id);
    if (!data) {
      return res.status(404).json({ error: "Không tìm thấy dữ liệu." });
    }
    res.json(data);
  } catch (error) {
    console.error("Lỗi khi xử lý dữ liệu:", error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi xử lý dữ liệu." });
  }
});

module.exports = router;
