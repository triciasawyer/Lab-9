'use strict';

const gradesModel = (sequelize, DataTypes) => sequelize.define('grades', {
  name: { type: DataTypes.STRING, required: true },
  teacher: { type: DataTypes.STRING, required: true },
  letterGrade: { type: DataTypes.STRING, required: true },
});

module.exports = gradesModel;
