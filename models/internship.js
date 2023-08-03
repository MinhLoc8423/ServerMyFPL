const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const internship = new Schema({
    id: { type: ObjectId }, // khóa chính
    title: { type: String, require: true },
    requirements: { type: String, require: true },
    salary: { type: Number, require: true },
    description: { type: String, require: true },
    nameCompany: { type: String, require: true },
    location: { type: String, require: true },
    date: { type: Date, require: true },
    time: { type: String, require: true },
});
module.exports = mongoose.models.internship || mongoose.model("internship", internship);
