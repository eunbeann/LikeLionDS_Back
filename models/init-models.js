var DataTypes = require("sequelize").DataTypes;
var Attend = require("./Attend");
var Homework = require("./Homework");
var Main = require("./Main");
var Study = require("./Study");
var User = require("./User");

function initModels(sequelize) {
  var _Attend = Attend(sequelize, DataTypes);
  var _Homework = Homework(sequelize, DataTypes);
  var _Main = Main(sequelize, DataTypes);
  var _Study = Study(sequelize, DataTypes);
  var _User = User(sequelize, DataTypes);

  Main.belongsTo(_Attend, { as: "aIDAttend", foreignKey: "aID"});
  Attend.hasMany(_Main, { as: "Mains", foreignKey: "aID"});
  Main.belongsTo(_Homework, { as: "hIDHomework", foreignKey: "hID"});
  Homework.hasMany(_Main, { as: "Mains", foreignKey: "hID"});
  Main.belongsTo(_Study, { as: "sIDStudy", foreignKey: "sID"});
  Study.hasMany(_Main, { as: "Mains", foreignKey: "sID"});
  Attend.belongsTo(_User, { as: "user", foreignKey: "user_id"});
  User.hasMany(_Attend, { as: "Attends", foreignKey: "user_id"});
  Homework.belongsTo(_User, { as: "user", foreignKey: "user_id"});
  User.hasMany(_Homework, { as: "Homeworks", foreignKey: "user_id"});
  Main.belongsTo(_User, { as: "user", foreignKey: "user_id"});
  User.hasMany(_Main, { as: "Mains", foreignKey: "user_id"});
  Study.belongsTo(_User, { as: "user", foreignKey: "user_id"});
  User.hasMany(_Study, { as: "Studies", foreignKey: "user_id"});

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
