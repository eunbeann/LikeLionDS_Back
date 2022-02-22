const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    uID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "user 테이블 식별자"
    },
    userID: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "회원 id"
    },
    userPW: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "회원 password"
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "회원 이름"
    },
    userMajor: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "회원 전공"
    },
    userEmail: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "회원 이메일"
    },
    userPhone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "회원 전화번호"
    },
    staff: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "운영진 여부 확인(라디오버튼)"
    },
    class_percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "강의진행률"
    },
    userGithub: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "회원 깃주소"
    },
    userVelog: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "회원 벨로그 주소"
    },
    userText: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    userImage: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'User',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uID" },
        ]
      },
    ]
  });
  

};

