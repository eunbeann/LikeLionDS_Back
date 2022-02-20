const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Homework', {
    hID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "과제체크 테이블 식별자"
    },
    homework: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "과제체크 게시판에 넣을 과제제출여부"
    },
    homework_text: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "과제체크 게시판에 넣을 과제공지"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "운영진 권한에서 수정가능한 걸 구별하기 위해",
      references: {
        model: 'User',
        key: 'uID'
      }
    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "출석체크,과제체크 게시판에 넣을 색 식별자"
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "색 식별자(0,1,2) or default(제출x), tardy(지각), sumit(제출)"
    }
  }, {
    sequelize,
    tableName: 'Homework',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hID" },
        ]
      },
      {
        name: "FK_Homework_user_id_User_uID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
