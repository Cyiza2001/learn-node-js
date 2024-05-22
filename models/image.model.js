const mongoose = require("mongoose");
const imageSchema = mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});
const userImage = mongoose.model("userImage", imageSchema);
module.exports = userImage;
