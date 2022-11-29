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
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      time: DataTypes.STRING,
      location: DataTypes.STRING,
      city: DataTypes.STRING,
      img: DataTypes.STRING,
      registrationDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "DetailTraining",
    }
  );
  return DetailTraining;
};
