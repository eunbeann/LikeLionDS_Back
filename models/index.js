const Sequelize = require('sequelize');
var DataTypes = require("sequelize").DataTypes;
var _Attend = require("./Attend");
var _Homework = require("./Homework");
var _Main = require("./Main");
var _Study = require("./Study");
var _User = require("./User");


const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

//db라는 객체에 모델 클래스에 넣는다.
db.User = _User;
db.Main = _Main;
db.Study = _Study;
db.Homework = _Homework;
db.Attend = _Attend;

//db 객체 안에 있는 모델들 간의 관계가 설정된다.
User.init(sequelize);
Main.init(sequelize);
Study.init(sequelize);
Homework.init(sequelize);
Attend.init(sequelize);

//모듈로 꺼낸다. 앞으로는 db객체만 require해도 위 모델에 접근 가능.
module.exports = db;