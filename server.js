// Declare variables
const express = require('express');
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
require('dotenv').config({path: './config/.env'});

// import functions and routes
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const editRoutes = require('./routes/edit')

//todo - Connect to database
connectDB()

//todo - Set Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))


//todo - Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)



//todo - start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))