// Lembaga Controller
const { Institution } = require("../models");

// Get all data institution
const getAllInstitution = async (req, res) => {
  try {
    const institution = await Institution.findAll();
    res.status(200).json({
      message: "Success get all institutions",
      data: institution,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get data institution by id
const getInstitutionById = async (req, res) => {
  const institutionId = req.params.id;
  try {
    const detail = await Institution.findOne({
      where: {
        id: institutionId,
      },
    });
    res.status(200).json({
      message: "Success get detail",
      statusCode: 200,
      data: detail,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// Add data institution
const createInstitution = async (req, res) => {
  const { code, institutionName, institutionAddress, province, email, phone, CPName, CPPhone, statusSLA } = req.body;

  try {
    await Institution.create({
      code,
      institutionName,
      institutionAddress,
      province,
      email,
      phone,
      CPName,
      CPPhone,
      statusSLA,
    });
    res.status(200).json({
      message: "Success create institutions",
    });
  } catch (error) {
    console.log(error);
  }
};

// Edit data institution
const updateInstitution = async (req, res) => {
  const institutionId = req.params.id;
  const { code, institutionName, institutionAddress, province, email, phone, CPName, CPPhone, statusSLA } = req.body;

  try {
    const institution = await Institution.findOne({
      where: { id: institutionId },
    });
    await institution.update({
      code,
      institutionName,
      institutionAddress,
      province,
      email,
      phone,
      CPName,
      CPPhone,
      statusSLA,
    });
    res.status(200).json({
      message: "Success update institution",
      statusCode: 200,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// Delete data institution
const deleteInstitution = async (req, res) => {
  try {
    const institutionId = req.params.id;
    await Institution.destroy({
      where: { id: institutionId },
    });
    res.status(204).end();
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = { getAllInstitution, createInstitution, deleteInstitution, updateInstitution, getInstitutionById };
