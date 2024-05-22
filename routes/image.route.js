const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Image = require("../models/image.model");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    //let's create an instance of the user
    const userImage = new Image({
      name: req.body.name,
      avatar: req.body.avatar,
      cloudinary_id: result.public_id,
    });

    await userImage.save();
    res.json(userImage);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
