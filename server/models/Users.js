module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        userID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userPW: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userMajor:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        userEmail:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        userPhone:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Users;
};