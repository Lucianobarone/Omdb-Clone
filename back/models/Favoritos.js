const S = require("sequelize");
const db = require("../config/db")

 class Favoritos extends S.Model{}

 Favoritos.init({
    Title:{
        type:S.STRING,
        allowNull:false
    },
    Poster:{
        type:S.STRING
    }

 },{sequelize:db, modelName:'favoritos'})

 module.exports=Favoritos