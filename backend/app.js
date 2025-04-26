const express = require('express');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Backend Server Started on Port: ",process.env.PORT || 3000);
})