const dbConfig = require('../dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize  = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
sequelize.authenticate()
.then(() => {
    console.log('connection..')
})
.catch(err => {
    console.log('Error'+ err)   
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel.js')(sequelize, DataTypes)
db.posts = require('./postModel.js')(sequelize, DataTypes)
db.comments = require('./commentModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('Re-sync done!')
})

//1 to Many relation
db.users.hasMany(db.posts, {
    foreignKey: 'userId',
    as: 'posts'
})

db.posts.belongsTo(db.users, {
    foreignKey: 'userId',
    as: 'user'
})

db.posts.hasMany(db.comments, {
    foreignKey: 'postId',
    as: 'comments'
})

db.comments.belongsTo(db.posts,
    {
        foreignKey: 'postId',
        as: 'post'
    }
)

db.users.hasMany(db.comments, {
    foreignKey: 'userId',
    as: 'comments'
})

db.comments.belongsTo(db.users, {
    foreignKey: 'userId',
    as: 'user'
})


module.exports = db