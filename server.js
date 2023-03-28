import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';


//Configure env
dotenv.config();

//Database Config
connectDB();

//Create Rest Object
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan ('dev'));

//Create Rest API 
app.get('/', (req,res) => {
    res.send("<h1>Welcome to proprenz app</h1>");
});

//Port
const PORT = process.env.PORT || 8080;

//Run Listen
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on port number ${PORT}`)
});