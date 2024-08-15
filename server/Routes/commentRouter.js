const commentController = require('../controllers/commentController')

const router = require('express').Router(); // Create an instance of the Express Router

router.post('/addComment', commentController.addComment)
router.get('/getComments', commentController.getComments)
router.get('/getComment/:id', commentController.getComment)
router.put('/updateComment/:id', commentController.updateComment)
router.delete('/deleteComment/:id', commentController.deleteComment)

module.exports = router