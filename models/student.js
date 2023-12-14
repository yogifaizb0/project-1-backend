'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.Major, {foreignKey: 'majorId', targetKey: 'id', as: 'major'})
    }
  }
  Student.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    email: DataTypes.STRING,
    birthDate: {
      type: DataTypes.DATE,
      field: 'birth_date'
    },
    address: DataTypes.STRING,
    majorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'major_id'
    },
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
    modelName: 'Student',
  });
  return Student;
};