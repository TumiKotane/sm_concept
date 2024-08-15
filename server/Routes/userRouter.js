const userController = require('../controllers/userController')

const router = require('express').Router();

router.user('/addUser', userController.addUser)
router.get('/getUsers')

module.exports = router