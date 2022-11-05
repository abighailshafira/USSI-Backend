const { Profile } = require("../models");

const registration = async (req, res) => {
  const { institutionName, institutionAddress, name, city, phone, gender } = req.body;
  const payment = req.body.file;

  try {
    await Profile.create({
      institutionName,
      institutionAddress,
      name,
      city,
      phone,
      gender,
      payment,
    });
    res.status(200).json({
      message: "terserah",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registration };
