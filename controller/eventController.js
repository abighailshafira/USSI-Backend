const { Event, Profile, DetailTraining } = require("../models");

const getAllEvent = async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [
        {
          model: Profile,
          require: true,
        },
        {
          model: DetailTraining,
          require: true,
        },
      ],
    });
    res.status(200).json({
      message: "BISA",
      data: events,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllEvent };
