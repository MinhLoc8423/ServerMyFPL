const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const news = new Schema({
    id: { type: ObjectId }, // khóa chính
    title: { type: String, require: true }, 
    content: { type: String, require: true },
    date: { type: Date, require: true },
    author: { type: String, require: true }
});
module.exports = mongoose.models.news || mongoose.model("news", news);
