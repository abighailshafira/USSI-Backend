const express = require("express");
const router = express.Router();
const multer = require("multer");
const { register, login, logout, getInstitution, getAdmin, updateAdmin, deleteAdmin, getAdminById } = require("../controller/authController");
const { getAllTraining, createTraining, detailTraining, detailTrainingById, updateTraining, deleteTraining } = require("../controller/trainingController");
const { getAllInstitution, createInstitution, deleteInstitution, updateInstitution, getInstitutionById } = require("../controller/institutionController");
const { getAllEvent, postCertificate, getEventById } = require("../controller/eventController");
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

// Auth
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminById);
router.put("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);

// Lembaga
router.post("/institution", createInstitution);
router.get("/institution", getAllInstitution);
router.get("/institution/:id", getInstitutionById);
router.put("/institution/:id", updateInstitution);
router.delete("/institution/:id", deleteInstitution);

router.get("/manuk/:id", getInstitution);

// Pendaftaran
router.post("/registration", upload.single("image"), registration);

// Pelatihan
router.post("/training", createTraining);
router.get("/detail/training", detailTraining);
router.get("/detail/training/:id", detailTrainingById);
router.put("/detail/training/:id", upload.single("img"), updateTraining);
router.delete("/detail/training/:id", deleteTraining);

// Kegiatan
router.get("/event", getAllEvent);
router.post("/event", upload.single("certificate"), postCertificate);
router.get("/event/:id", getEventById);

// router.get("/training", getAllTraining);

module.exports = router;
