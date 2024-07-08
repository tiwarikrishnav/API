const CategoryModel = require("../models/Category");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { status } = require("init");
var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dzmqs5sdv",
  api_key: "282587691228368",
  api_secret: "th_fTIbfb6f_QcZLnou3dj4rIh8",
});

class CategoryController {
//   static categoryinsert = async (req, res) => {
//     try {
//       const { name } = req.body;
//       const file = req.files.image;
//       const myCloud = cloudinary.uploader.upload(file.tempFilepath, {
//         folder: "userImage",
//       });
//       const datainsert = new CategoryModel({
//         name: name,
//         image: {
//           public_id: myCloud.public_id,
//           url: myCloud.secure_url,
//         },
//       });
//       await datainsert.save();
//       res.status(201).json({
//         status: "success",
//         message: "Category insert Successfully",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

  static categoryinsert = async (req, res) => {
    try {
      // console.log(req.body);
      const { id } = req.body;
      console.log(req.body); 
      const { name } = req.body;
      //console.log(req.body)
      const file = req.files.image;
      //image upload cloudinary
      const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "userprofile",
      });
      const result = new CategoryModel({
        name: name,
        image: {
          public_id: imageUpload.public_id,
          url: imageUpload.secure_url,
        },
      });
      //console.log(result)
      await result.save();
      res.status(201).json({
        status: "success",
        message: "Category insert Successfully",
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = CategoryController;
