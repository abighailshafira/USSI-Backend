// Pendaftaran Controller
const { Profile, Event } = require("../models");
const user = require("../models/user");

// Add data
const registration = async (req, res) => {
  const { userId, detailTrainingId, city, phone, gender } = req.body;
  const payment = req.body.file;

  try {
    const profile = await Profile.create({
      userId,
      city,
      phone,
      gender,
      payment,
    });
    await Event.create({
      profileId: profile.id,
      userId: userId,
      DetailTrainingId: detailTrainingId,
    });
    res.status(200).json({
      message: "terserah",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registration };
