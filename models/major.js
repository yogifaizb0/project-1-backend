'use strict';
const {
  Model
} = require('sequelize');
const student = require('./student');
module.exports = (sequelize, DataTypes) => {
  class Major extends Model {
    static associate(models) {
      Major.hasMany(models.Student, {sourceKey: 'id', foreignKey: 'majorId', as: 'students'})
    }
  }
  Major.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    majorName: {
      type: DataTypes.STRING,
      field: 'major_name'
    }, 
    accreditation: DataTypes.STRING,
    institution: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at',
    }
  }, {
    sequelize,
    modelName: 'Major',
  });
  return Major;
};