'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./data-collection.js');
const gradesModel = require('./grades/model.js');
const userModel = require('./users.js');
// const foodModel = require('./food/model.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

const sequelize = new Sequelize(DATABASE_URL, {logging: false});
const grades = gradesModel(sequelize, DataTypes);
// const food = foodModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  grades: new Collection(grades),
  // food: new Collection(food),
  users,
};
