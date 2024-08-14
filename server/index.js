require('dotenv').config() // to access enviroonment variables
const express = require('express');
const app = express(); // create an instance of express web server

app.get('/', (req, res) => {
    res.send('Hello World');
}); //default endpoint

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
})
