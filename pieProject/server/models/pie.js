module.exports =(sequelize, Datatypes) => {
    const Pie = sequelize.define('pie', {
        nameOfPie:{
            type: Datatypes.STRING,
            allowNull: false
        },
        baseOfPie:{
            type: Datatypes.STRING,
            allowNull: false
        },
        crust:{
            type: Datatypes.STRING,
            allowNull: false

        },
        timeToBake:{
            type: Datatypes.INTEGER,
            allowNull: false
        },
        servings:{
            type: Datatypes.INTEGER,
            allowNull: false
        },
        rating:{
            type: Datatypes.INTEGER,
            allowNull: false
        }
    })
    return Pie;
}