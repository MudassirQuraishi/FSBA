


const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// creating a table 
const User = sequelize.define ('users',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },

    name : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    email :{
        type : Sequelize.STRING,
        unique : true,
        allowNull: false,
    },
    phone : {
        type : Sequelize.STRING,
        unique : true,
        allowNull: false
    }
})

// exporting 
module.exports = User;