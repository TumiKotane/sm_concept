const dbConfig = require('../dbConfig');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
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
    console.log('connected..')
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
    console.log('YES, we did it... re-sync done!')
})
// 1 to Many Relation

db.users.hasMany(db.posts, {
    foreignKey: 'userId',
    as: 'post'
})

db.posts.belongsTo(db.users, {
    foreignKey: 'userId',
    as: 'user'
})

db.comments.belongsTo(db.posts, {
    foreignKey: 'postId',
    as: 'post'
})

module.exports = db
