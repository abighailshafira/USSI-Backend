// Pelatihan Controller
const { Training, DetailTraining } = require("../models");
const training = require("../models/training");

const createTraining = async (req, res) => {
  const { trainingName, description, startDate, endDate, time, location, city, registrationDate } = req.body;

  try {
    await DetailTraining.create({
      trainingName,
      description,
      startDate,
      endDate,
      time,
      location,
      city,
      registrationDate,
    });
    res.status(200).json({
      message: "Success create training",
    });
  } catch (error) {
    console.log(error);
  }
};

const detailTraining = async (req, res) => {
  try {
    const detail = await DetailTraining.findAll();
    res.status(200).json({
      message: "Success get detail",
      data: detail,
    });
  } catch (error) {
    console.log(error);
  }
};

const detailTrainingById = async (req, res) => {
  const trainingId = req.params.id;
  try {
    const detail = await DetailTraining.findOne({
      where: {
        id: trainingId,
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

const updateTraining = async (req, res) => {
  const trainingId = req.params.id;
  const { trainingName, description, startDate, endDate, time, location, city, registrationDate } = req.body;
  const img = req.body.file;

  try {
    const training = await DetailTraining.findOne({
      where: { id: trainingId },
    });
    await training.update({
      trainingName,
      description,
      startDate,
      endDate,
      time,
      location,
      city,
      registrationDate,
      img,
    });
    res.status(200).json({
      message: "Success update training",
      statusCode: 200,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteTraining = async (req, res) => {
  try {
    const trainingId = req.params.id;
    await DetailTraining.destroy({
      where: { id: trainingId },
    });
    res.status(204).end();
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = { createTraining, detailTraining, detailTrainingById, updateTraining, deleteTraining };
