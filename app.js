const {connectToMongodb} = require('./connect');
const express = require('express');
const path = require('path');
const userRoute = require('./routes/user');
const staticRoute = require('./routes/saticRouter');
const urlRoute = require("./routes/url")
const cookieParser = require('cookie-parser');
const {handelLoginUid,checkAuth} = require('./middlewares/auth')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;
connectToMongodb(process.env.MONGO_URL || 'mongodb://localhost:27017/userdb')
.then(()=>{console.log('connected sucessfully')})

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set('view engine','ejs');
app.set('views',path.resolve('./view'));

app.use('/',staticRoute);
app.use('/url',checkAuth,urlRoute);
app.use('/user',handelLoginUid,userRoute);

app.listen(PORT,()=>{console.log(`express is listening to port : ${PORT}`)})