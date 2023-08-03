const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const exam = new Schema({
    id: { type: ObjectId }, // khóa chính
    course_id: { type: ObjectId,ref: "course", require: true }, // khóa ngoại,
    date: { type: Date, require: true },
    time: { type: String, require: true },
    location: { type: String, require: true }
});
module.exports = mongoose.models.exam || mongoose.model("exam", exam);
