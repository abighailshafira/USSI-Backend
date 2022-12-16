const express = require("express");
const router = express.Router();
const { register, login, logout, getInstitution, getAdmin, updateAdmin, deleteAdmin, getAdminById } = require("../controller/authController");
const { createTraining, detailTraining, detailTrainingById, updateTraining, deleteTraining } = require("../controller/trainingController");
const { getAllInstitution, createInstitution, deleteInstitution, updateInstitution, getInstitutionById } = require("../controller/institutionController");
const { getAllEvent, postCertificate, getEventById } = require("../controller/eventController");
const { registration } = require("../controller/registrationController");

// Auth
router.post("/register", register);
router.get("/institution/:id", getInstitution);
router.post("/login", login);
router.post("/logout", logout);
router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminById);
// router.put("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);

// Lembaga
router.post("/institution", createInstitution);
router.get("/institution", getAllInstitution);
router.get("/institution/:id", getInstitutionById);
// router.put("/institution/:id", updateInstitution);
router.delete("/institution/:id", deleteInstitution);

// Pendaftaran
router.post("/registration", registration);

// Pelatihan
router.post("/training", createTraining);
router.get("/detail/training", detailTraining);
router.get("/detail/training/:id", detailTrainingById);
// router.put("/detail/training/:id", updateTraining);
router.delete("/detail/training/:id", deleteTraining);

// Kegiatan
router.get("/event", getAllEvent);
// router.post("/event", postCertificate);
router.get("/event/:id", getEventById);

module.exports = router;
