const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name:  String,
    description: String
});
  
const model = mongoose.model('Pet', petSchema);
module.exports = model;