module.exports = (sequelize, DataTypes) => {
    const CheckA = sequelize.define("CheckA",{
        Color_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        // createdAt:{
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: DataTypes.NOW,
        // },
        // upDatedAt:{
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: DataTypes.NOW,
        // }
        
    });
    
    return CheckA;
}


