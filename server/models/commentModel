const { DataTypes } = require("sequelize")
const { sequelize } = require("./database")

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timestamp: true
    })  
    return Comments
}