const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Study', {
    sID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "스터디 테이블 식별자"
    },
    team_member: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "스터디 게시판에  넣을 팀멤버"
    },
    team_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "스터디 게시판에 넣을 팀이름"
    },
    study_text: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "스터디 게시판에 넣을 글내용"
    },
    study_report: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "스터디 게사판에 넣을 멤버소감문"
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "수정된 시각"
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
      comment: "image 테이블을 만들어야 할 것 같음(에어비앤비 erd 참고. 방정보와 방사진 느낌으로 update_at, created_at)"
    }
  }, {
    sequelize,
    tableName: 'Study',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sID" },
        ]
      },
      {
        name: "FK_Study_user_id_User_uID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
