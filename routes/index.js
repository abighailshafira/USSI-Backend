const express = require("express");
const router = express.Router();
const multer = require("multer");
const { register, login, logout } = require("../controller/authController");
const { registration } = require("../controller/registrationController");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/images");
  },
  filename: function (req, file, cb) {
    let filename = file.originalname;
    req.body.file = filename;
    cb(null, filename);
  },
});

let upload = multer({ storage: storage });

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/registration", upload.single("payment"), registration);

module.exports = router;
