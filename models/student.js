const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const student = new Schema({
    id: { type: ObjectId }, // khóa chính
    fullname: { type: String, require: true },
    dateOfBirth: { type: Date, require: true },
    phoneNumber: { type: String, require: true },
    address: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
});
module.exports = mongoose.models.student || mongoose.model("student", student);
