"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Profile);
      this.belongsTo(models.DetailTraining);
      this.belongsTo(models.User);
    }
  }
  Event.init(
    {
      profileId: DataTypes.INTEGER,
      DetailTrainingId: DataTypes.INTEGER,
      certificate: DataTypes.STRING,
      payment: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
