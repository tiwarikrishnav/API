const express = require("express");
const TeacherControllers = require("../controllers/TeacherControllers");
const UserController = require("../controllers/UserController");
const CategoryController=require("../controllers/CategoryController")
const route = express.Router();
const { ChangeUserAuth } = require("../middleware/auth");
const TenderController = require("../controllers/TenderController");

// route (http://localhost:4000/api/teacherDisplay)
route.get("/teacherdisplay", TeacherControllers.display);

// UserController
route.get("/getAllUser", ChangeUserAuth, UserController.getAllUser);
route.post("/userinsert", UserController.registerUser);
route.post("/loginuser", UserController.loginUser);
route.get("/logout", UserController.logout);
route.post("/updatepassword", ChangeUserAuth, UserController.updatePassword);
route.post("/updateProfile", ChangeUserAuth, UserController.updateProfile);
route.get("/admin/users", UserController.getAllUser);
route.get("/admin/getUser/:id", UserController.getSingleUser);
route.get("/getUserdetails", ChangeUserAuth, UserController.getUserDetail);
route.get("/admin/deleteUser/:id", UserController.deleteUser);


// CategoryController
route.post("/categorynameinsert",CategoryController.categoryinsert)


// TenderController
route.post("/Tender_insert",TenderController.Tender_insert)
route.get("/getTender",TenderController.getTender)
route.get("/getTenderById/:id",TenderController.getTenderById)
route.get("/deleteTender/:id",TenderController.deleteTender)

module.exports = route;
