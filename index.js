const express = require('express');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 8080
app.listen(port);


app.get('/', (req, res) =>{
    res.send('Hello Loveworld in port '+ port)
})