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

module.exports = { getAllTraining, createTraining, detailTraining };
