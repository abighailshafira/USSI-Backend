const { Event, Profile, DetailTraining, User, Institution } = require("../models");

const getAllEvent = async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [
        {
          model: Profile,
          require: true,
          include: {
            model: User,
            require: true,
            include: {
              model: Institution,
              require: true,
            },
          },
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

const postCertificate = async (req, res) => {
  const certificate = req.body.file;

  try {
    await Event.create({
      certificate,
    });
    res.status(200).json({
      message: "terserah",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllEvent, postCertificate };
