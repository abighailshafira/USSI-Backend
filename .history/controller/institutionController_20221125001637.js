const { Institution } = require("../models");

const getAllInstitution = async (req, res) => {
  try {
    await Institution.findAll();
    res.status(200).json({
      message: "BISSSAAAA",
    });
  } catch (error) {
    console.log(error);
  }
};

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
      message: "bisa create",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllInstitution, createInstitution };
