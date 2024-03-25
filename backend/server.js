const connection = require("./config/config");
const express=require('express');
const router = require("./router/Testrouter");
const cors = require('cors');
const dotenv=require('dotenv');


connection()


const app=express()
app.use(express.json())
app.use(cors());
dotenv.config()
app.use('/',router)
port=4000
app.listen(port,console.log('server started'))