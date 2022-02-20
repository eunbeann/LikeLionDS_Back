const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Main', {
    mID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Main 테이블 식별자"
    },
    leader_text: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "대표님 한 말씀"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "날짜 변경 시간"
    },
    calender: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "캘린더 일정 기간"
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
    image: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "이미지"
    },
    winner: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "user테이블의 userName을 가져옴"
    },
    sID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "스터디게시판 식별자",
      references: {
        model: 'Study',
        key: 'sID'
      }
    },
    hID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "과제체크게시판 식별자",
      references: {
        model: 'Homework',
        key: 'hID'
      }
    },
    aID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "출석체크게시판 식별자",
      references: {
        model: 'Attend',
        key: 'aID'
      }
    }
  }, {
    sequelize,
    tableName: 'Main',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mID" },
        ]
      },
      {
        name: "FK_Main_sID_Study_sID",
        using: "BTREE",
        fields: [
          { name: "sID" },
        ]
      },
      {
        name: "FK_Main_hID_Homework_hID",
        using: "BTREE",
        fields: [
          { name: "hID" },
        ]
      },
      {
        name: "FK_Main_aID_Attend_aID",
        using: "BTREE",
        fields: [
          { name: "aID" },
        ]
      },
      {
        name: "FK_Main_user_id_User_uID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
