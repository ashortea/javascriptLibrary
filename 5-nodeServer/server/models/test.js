module.exports = function(sequelize, Datatypes){
    return sequelize.define('test',{
        testdata: Datatypes.STRING
    });
};