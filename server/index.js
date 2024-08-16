require('dotenv').config() // To access environment variables
const express = require('express');
const app = express(); // Create an instance of Express Web server
const cors = require('cors')

app.use(express.json())
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: true }))

// const router = require('./routes/userRouter');
// app.use('/api', router); //
/*============================================================ */
const db = require('./models/database.js')
const Users = db.users

app.get('/', (req, res) => {
  res.send('Hello World!');
}); // Default endpoint.

app.post('/api/addUser', async (req, res) => {
  let info = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  }

  const user = await Users.create(info)
  res.status(200).send(user)
  console.log('User added!')
}); // Add a User

app.get('/api/getAllUsers', async (req, res) => {
  const users = await Users.findAll({})
  res.status(200).send(users)
}) // Get all created Users

app.get('/api/getUser/:id', async (req, res) => {
    let id = req.params.id
    let user = await Users.findOne({ where: { id: id }})
    res.status(200).send(user)
}) // Get one User by Id

app.put('/api/updateUser/:id', async (req, res) => {
  let id = req.params.id
  const user = await Users.update(req.body, { where: { id: id }})
  res.status(200).send('User Info has been updated')
}) // Update one User by Id

app.delete('/api/deleteUser/:id', async (req, res) => {
  let id = req.params.id
  await Users.destroy({ where: { id: id }} )
  res.status(200).send('User is deleted !')
}) // Delete one User by Id
/*============================================================ */
/*============================================================ */
const Posts = db.posts

app.post('/api/createPost', async (req, res) => {
  let info = {
    id: req.body.id,
    title: req.body.title,
    content: req.body.content
  };

  const post = await Posts.create(info)
  res.status(200).send(info)
})

app.get('/api/getAllPosts', async (req, res) => {
  const posts = await Posts.findAll({})
  res.status(200).send(posts)
})

app.get('/api/getPost/:id', async (req, res) => {
  let id = req.params.id
  const post = await Posts.findOne(req.body, { where: { id: id }})
  res.status(200).send(post)
})

app.put('/api/getPost/:id', async (req, res) => {
  let id = req.params.id
  const post = await Posts.update(req.body, { where: { id: id }})
  res.status(200).send("Post has been updated!")
})

app.delete('/api/getPost/:id', async (req, res) => {
  let id = req.params.id
  await Posts.delete(req.body, { where: { id: id }})
  res.status(200).send("Post has been deleted!")
})
/*============================================================ */
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Youre up and running on http://localhost:${PORT}`);
});
