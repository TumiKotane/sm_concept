const { DataTypes } = require("sequelize");
const { sequelize } = require("./database");

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // timestamps: true
    })

    return Comment;
}
