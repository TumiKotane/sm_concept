const db = require('../models/database')
const Comment = db.comments

const addComment = async (req, res) => {
    let info = {
        comment: req.body.comment
    }

    const comment = await Comment.create(info)
    res.status(200).send(comment)
    console.log('Comment added!')
}