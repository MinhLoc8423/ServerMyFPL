var modelProduct = require("../models/student");
var express = require("express");
var router = express.Router();

//http://localhost:3000/user
router.get("/", async function (req, res, next) {
  var data = await modelProduct.find();
  res.json(data);
});

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  console.log(req.body); // In ra xem dữ liệu gửi từ Postman có đúng không
  const user = await modelProduct.findOne({
    email: email, // Sử dụng biến username, không phải 'username'
    password: password, // Sử dụng biến password, không phải 'password'
  });
  console.log(user); // In ra để kiểm tra các giá trị username và password đã lấy từ req.body
  if (user) {
    res.json({ "statusCode": res.statusCode, "data": user})
  } else {
    res.send("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.");
  }
});

module.exports = router;
