'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Institution.init({
    code: DataTypes.INTEGER,
    institutionName: DataTypes.STRING,
    institutionAddress: DataTypes.STRING,
    province: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    CPName: DataTypes.STRING,
    CPPhone: DataTypes.STRING,
    statusSLA: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Institution',
  });
  return Institution;
};