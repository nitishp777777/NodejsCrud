require('dotenv').config();

const express = require('express');

const app =  express();
const connection = require("./db");
const cors =  require('cors');
const employees = require('./routes/employees');
//database
connection();


app.use(express.json());
app.use(cors());
//routes
app.use("/api/employees",employees);
//listening ports
const port =  process.env.PORT || 8080;
app.listen(port,() => console.log(`Listening in port ${port}...`));