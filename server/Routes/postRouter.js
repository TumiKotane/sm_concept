const postController = require('../controllers/postController')

const router = require('express').Router(); // Create an instance of the Express Router

roouter.post('/addPost', postController.addPost)
router.get('/getPosts', postController.getPosts)
router.get('/getPost/:id', postController.getPost)
router.put('/updatePost/:id', postController.updatePost)
router.delete('/deletePost/:id', postController.deletePost)

module.exports = router