const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require("./util/database");
const userRoutes = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.use(userRoutes);

sequelize.sync();
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Backend Server Started on Port: ",process.env.PORT || 3000);
})