const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Image = require("../models/image.model");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    //let's create an instance of the user
    let userImage = new Image({
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

router.get("/", async (req, res) => {
  try {
    let userImage = await Image.find();
    res.json({ userImage });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let userImage = await Image.findById(req.params.id);
    console.log(req.params.id);
    console.log(userImage.cloudinary_id);
    await cloudinary.uploader.destroy(userImage.cloudinary_id);
    await Image.deleteOne(userImage);
    res.json(userImage);
  } catch (error) {
    console.log(error);
  }
});

router.put("/", upload.single("image"), async (req, res) => {
  try {
    let userImage = await Image.findById(req.params.id);
    await cloudinary.uploader.destroy(userImage.cloudinary_id);
    await cloudinary.uploader.upload(req.file.path);
    const data = {
      name: req.body.name || userImage.name,
      avatar: result.secure._url || userImage.avatar,
      cloudinary_id: result.public_id || userImage.cloudinary_id,
    };
    userImage = await userImage.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.json(userImage);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
