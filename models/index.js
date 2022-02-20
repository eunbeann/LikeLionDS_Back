const Sequelize = require('sequelize');

// 클래스를 불러온다.
const User = require('./user')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;

User.init(sequelize); 

User.associate(db);

module.exports = db;