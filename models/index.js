const Sequelize = require('sequelize');
var DataTypes = require("sequelize").DataTypes;

var User = require("./User");
var Main = require("./Main");
var Study = require("./Study");
var Homework = require("./Homework");
var Attend = require("./Attend");

// 환경변수, 실제 배포할 때는 'production'으로 바꿔야한다.
const env = process.env.NODE_ENV || 'development';
// config/config.json 파일에 있는 설정값들을 불러온다.
// config객체의 env변수(development)키 의 객체값들을 불러온다. 즉, 데이터베이스 설정을 불러옴
const config = require('../config/config')[env];
// db 객체 생성
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

//db라는 객체에 모델 클래스에 넣는다.
db.User = User;
db.Main = Main;
db.Study = Study;
db.Homework = Homework;
db.Attend = Attend;

//db 객체 안에 있는 모델들 간의 관계가 설정된다.
// User.init(sequelize);
// Main.init(sequelize);
// Study.init(sequelize);
// Homework.init(sequelize);
// Attend.init(sequelize);

// db객체 안에 있는 모델들 간의 관계가 설정된다.
// User.associate(db);
// Main.associate(db);
// Study.associate(db);
// Homework.associate(db);
// Attend.associate(db);

//모듈로 꺼낸다. 앞으로는 db객체만 require해도 위 모델에 접근 가능.
module.exports = db;