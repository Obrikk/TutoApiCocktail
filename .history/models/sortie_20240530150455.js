const {DataTypes} = require('sequelize')
const sequelize = require('../db.config')

const Sortie =sequelize.define('Sortie',{
    id:{
        type:DataTypes.INTEGER(10),
        primaryKey :true,
        autoIncrement: true
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    type:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    date:{
        type:DataTypes.DATE,
        allowNull: false
    },
    lieu:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    horaires:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    coutBrut:{
        type:DataTypes.INTEGER(10),
        defaultValue: '',
        allowNull: false
    },
    priseCharge:{
        type:DataTypes.INTEGER(10),
        defaultValue: '',
        allowNull: false
    },
    coutTotal:{
        type:DataTypes.INTEGER(10),
        defaultValue: '',
        allowNull: false
    },
}, paranoi)


module.exports = Sortie