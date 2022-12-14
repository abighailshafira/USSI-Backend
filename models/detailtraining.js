"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailTraining extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Event, {
        foreignKey: "DetailTrainingId",
      });
    }
  }
  DetailTraining.init(
    {
      trainingName: DataTypes.STRING,
      description: DataTypes.STRING,
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      time: DataTypes.STRING,
      location: DataTypes.STRING,
      city: DataTypes.STRING,
      img: DataTypes.STRING,
      registrationDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DetailTraining",
    }
  );
  return DetailTraining;
};
