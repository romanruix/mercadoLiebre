require("dotenv").config();

const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});