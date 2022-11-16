"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Event, {
        foreignKey: "profileId",
      });

      this.belongsTo(models.User);
    }
  }
  Profile.init(
    {
      userId: DataTypes.INTEGER,
      institutionName: DataTypes.STRING,
      institutionAddress: DataTypes.STRING,
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      phone: DataTypes.STRING,
      // gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
