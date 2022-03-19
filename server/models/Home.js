module.exports = (sequelize, DataTypes) => {

  const Home = sequelize.define("Home", {
      leader_notice: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "Welcome, LikeLion 10TH!"
      },
      first_winner: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      second_winner: {
        type: DataTypes.STRING,
          allowNull: false,
      },
      third_winner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calender: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "일정 생성/추가/삭제"
  },
  });

  return Home;
};