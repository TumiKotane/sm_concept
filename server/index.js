require('dotenv').config() // to access enviroonment variables

const express = require('express');
const app = express(); // create an instance of express web server

app.use(express.json()) //middleware to parse json data
app.use(express.urlencoded({ extended: true })) //middleware to parse form data

const router = require('./Routes/userRouter.js');
app.use('/api', router); //middleware to use the router

app.get('/', (req, res) => {
    res.send('Hello World');
}); //default endpoint

//Tester endpoints

//app.get('/SignUp', (req, res) => {
// res.send('This will be the sign up page');
//}); //default endpoint

//app.get('/LogIn', (req, res) => {
 //   res.send('This will be the login page');
//}); //default endpoint

//app.get('/Home', (req, res) => {
 //   res.send('This will be the home page');
//}); //default endpoint

//app.get('/Profile', (req, res) => {
//    res.send('This will be the profile page');
//}); //default endpoint

//app.get('/Comments', (req, res) => {
//    res.send('This will be the comments page');
//}); //default endpoint

app.get('/Inbox', (req, res) => {
    res.send('This will be the inbox page');
}); //default endpoint

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
})
