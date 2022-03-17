module.exports = (sequelize, DataTypes) => {

    const Study = sequelize.define("Study", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        studyText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        studyDate:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Study;
};