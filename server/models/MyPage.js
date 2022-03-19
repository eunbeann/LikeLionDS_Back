module.exports = (sequelize, DataTypes) => {
    const MyPage = sequelize.define
    ("MyPage",
    {
        Github:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Velog:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Userimg:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        introduce:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    }

    )
    return MyPage;
}