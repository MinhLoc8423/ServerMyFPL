const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
    id: { type: ObjectId }, // khóa chính
    courseCode: { type: String, require: true },
    courseName: { type: String, require: true },
    instructor: { type: String, require: true },
    class: { type: String, require: true },
});
module.exports = mongoose.models.course || mongoose.model("course", course);
