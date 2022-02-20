var DataTypes = require("sequelize").DataTypes;
var _Attend = require("./Attend");
var _Homework = require("./Homework");
var _Main = require("./Main");
var _Study = require("./Study");
var _User = require("./User");

function initModels(sequelize) {
  var Attend = _Attend(sequelize, DataTypes);
  var Homework = _Homework(sequelize, DataTypes);
  var Main = _Main(sequelize, DataTypes);
  var Study = _Study(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Main.belongsTo(Attend, { as: "aID_Attend", foreignKey: "aID"});
  Attend.hasMany(Main, { as: "Mains", foreignKey: "aID"});
  Main.belongsTo(Homework, { as: "hID_Homework", foreignKey: "hID"});
  Homework.hasMany(Main, { as: "Mains", foreignKey: "hID"});
  Main.belongsTo(Study, { as: "sID_Study", foreignKey: "sID"});
  Study.hasMany(Main, { as: "Mains", foreignKey: "sID"});
  Attend.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Attend, { as: "Attends", foreignKey: "user_id"});
  Homework.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Homework, { as: "Homeworks", foreignKey: "user_id"});
  Main.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Main, { as: "Mains", foreignKey: "user_id"});
  Study.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Study, { as: "Studies", foreignKey: "user_id"});

  return {
    Attend,
    Homework,
    Main,
    Study,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
