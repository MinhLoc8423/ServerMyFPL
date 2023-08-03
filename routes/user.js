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
    res.json({ statusCode: res.statusCode, data: user });
  } else {
    res.send("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.");
  }
});

router.put("/changepassword", async function (req, res, next) {
  try {
    const { id, oldpassword, password } = req.body;
    const user = await modelProduct.findById(id);
    if (!user) {
      return res.status(404).json({ error: "Không tìm thấy người dùng." });
    }
    if (oldpassword !== user.password) {
      return res.status(400).json({ error: "Mật khẩu cũ không chính xác." });
    }
    user.password = password;
    await user.save();
    res.json({ message: "Thay đổi mật khẩu thành công." });
  } catch (error) {
    console.error("Lỗi khi thay đổi mật khẩu:", error);
    res
      .status(500)
      .json({ error: "Đã xảy ra lỗi khi thay đổi mật khẩu." });
  }
});

router.put("/update", async function (req, res, next) {
  try {
    const studentId = req.query.id;
    const updatedData = req.body;
    console.log(updatedData);
    const updatedStudent = await modelProduct.findByIdAndUpdate(
      studentId,
      updatedData,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ error: "Không tìm thấy sinh viên." });
    }
    res.json({
      message: "Cập nhật thông tin sinh viên thành công.",
      data: updatedStudent,
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin sinh viên:", error);
    res
      .status(500)
      .json({ error: "Đã xảy ra lỗi khi cập nhật thông tin sinh viên." });
  }
});

module.exports = router;
