const db = require('../models/database')
const Posts = db.posts

const addPost = async (req, res) => {
    let info = {
        title: req.body.title,
        content: req.body.content
    }

    const post = await Posts.create(info)
    res.status(200).send(post)
    console.log('Post added!')
}