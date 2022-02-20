const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Attend', {
    aID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "출석체크 테이블 식별자"
    },
    session_text: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "출석체크 게시판에 넣을 세션공지"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "출석체크,과제체크 게시판에 넣을 색 식별자"
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
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "수정된 시각"
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "색 식별자(0,1,2) or default(결석), tardy(지각), attend(출석)"
    }
  }, {
    sequelize,
    tableName: 'Attend',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aID" },
        ]
      },
      {
        name: "FK_Attend_user_id_User_uID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
