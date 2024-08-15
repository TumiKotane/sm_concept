const db = require('../models/database')

//create main model
const Users = db.users

const addUser = async (req, res) => {
 let info = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    const user = await Users.create(info)
    res.status(200).send(user)
    console.log(user);
    console.log('User Added Successfully')



}