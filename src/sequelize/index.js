'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/config');

const db = {};
let sequelize = new Sequelize(config.database, config.username, config.password, {
  logging: false,
  dialect: config.dialect,
  host: config.host,
  port: config.port
});
const folderName = __dirname + '/models/';
fs
  .readdirSync(folderName)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(folderName, file))(sequelize, Sequelize);
    const name = file.split('.')[0];
    db[name] = model;
  });


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
