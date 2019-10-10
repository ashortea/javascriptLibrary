module.exports = function(sequelize, DataType){
    return sequelize.define('authtestdata', {
        authtestdata: DataTypes.STRING,
        owner: DataTypes.INTEGER
    });
}