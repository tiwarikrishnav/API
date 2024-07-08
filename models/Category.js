const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    Public_id: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

var CategoryModel = mongoose.model("model", CategorySchema);
module.exports = CategoryModel;
