'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Training.init({
    id: DataTypes.INTEGER,
    institutionName: DataTypes.STRING,
    trainingName: DataTypes.STRING,
    participant: DataTypes.INTEGER,
    attendance: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    month: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Training',
  });
  return Training;
};