const express = require("express");
const router = express.Router();
const multer = require("multer");
const { register, login, logout, getInstitution, getAdmin, updateAdmin, deleteAdmin } = require("../controller/authController");
const { registration } = require("../controller/registrationController");
const { getAllTraining, createTraining, detailTraining, detailTrainingById, updateTraining, deleteTraining } = require("../controller/trainingController");
const { getAllEvent, postCertificate } = require("../controller/eventController");
const { getAllInstitution, createInstitution, deleteInstitution, updateInstitution } = require("../controller/institutionController");

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
router.get("/admin", getAdmin);
router.put("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);
router.post("/login", login);
router.post("/logout", logout);
router.get("/manuk/:id", getInstitution);
router.post("/registration", upload.single("image"), registration);
router.get("/training", getAllTraining);
router.post("/training", upload.single("img"), createTraining);
router.get("/detail/training", detailTraining);
router.get("/detail/training/:id", detailTrainingById);
router.put("/detail/training/:id", upload.single("img"), updateTraining);
router.delete("/detail/training/:id", deleteTraining);
router.get("/event", getAllEvent);
router.post("/event", upload.single("certificate"), postCertificate);
router.get("/institution", getAllInstitution);
router.post("/institution", createInstitution);
router.delete("/institution/:id", deleteInstitution);
router.put("/institution/:id", updateInstitution);

module.exports = router;
