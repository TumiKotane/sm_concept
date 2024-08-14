const userController = require('../controllers/userController');

onst router = require('express').Router();

router.post('/addUser', userController.addUser)
router.get('/getUsers')

module.exports = router