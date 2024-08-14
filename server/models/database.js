const dbConfig = require('..dbconfig.js');

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

db.sequelize.sync({ force: false })
.then(() => {
    console.log('Re-sync done!')
})

//1 to Many relation
//db.products.hasMany(db.review)





module.exports = db