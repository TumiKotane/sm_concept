const { DataTypes } = require("sequelize");
const { sequelize } = require("./database");

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // timestamps: true
    })

    return Post;
}