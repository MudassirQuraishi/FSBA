


const Sequelize = require('sequelize');

const sequelize = new Sequelize ('appointment-booking','root','H3lloworld!',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;