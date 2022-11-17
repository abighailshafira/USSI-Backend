const { Training, DetailTraining } = require("../models");
const training = require("../models/training");

const getAllTraining = async (req, res) => {
  try {
    await Training.findAll();
    res.status(200).json({
      message: "BISSSAAAA",
    });
  } catch (error) {
    console.log(error);
  }
};

const createTraining = async (req, res) => {
  const { institutionName, trainingName, participant, attendance, month } = req.body;

  try {
    await Training.create({
      institutionName,
      trainingName,
      participant,
      attendance,
      month,
    });
    res.status(200).json({
      message: "terserah",
    });
  } catch (error) {
    console.log(error);
  }
};

const detailTraining = async (req, res) => {
  try {
    const detail = await DetailTraining.findAll();
    res.status(200).json({
      message: "BISSSAAAA",
      data: detail,
    });
  } catch (error) {
    console.log(error);
  }
};

const detailTrainingById = async (req, res) => {
  const trainingId = req.params.id
  try {
    const detail = await DetailTraining.findOne({
      include: {
        // model: Profiles,
        required: true,
        attributes: [
          'id',
          "trainingName",
          "description",
          "startDate",
          "endDate",
          "location",
          "city",
          "img",
        ]
      },
      where: {
        id: trainingId
      }
    })
    res.status(200).json({
      message: 'Success get detail',
      statusCode: 200,
      data: detail
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

module.exports = { getAllTraining, createTraining, detailTraining };
