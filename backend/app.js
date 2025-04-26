const express = require('express');
require('dotenv').config();

const sequelize = require("./util/database");

const app = express();

sequelize.sync();
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Backend Server Started on Port: ",process.env.PORT || 3000);
})