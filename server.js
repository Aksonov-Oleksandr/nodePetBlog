import express from 'express';
import path from 'path';
import __dirname from './__dirname.js';
import morgan from 'morgan';
import mongoose from 'mongoose';
import methodOverride from "method-override";
import postRoutes from "./routes/post-routes.js";
import contactRoute from "./routes/contacts-route.js";
import {createPath} from "./helpers/create-path.js";
import apiPostRoutes from "./routes/api-post-routes.js";
import chalk from "chalk";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.set('view engine','ejs');
let errorMsg = chalk.bgWhite.redBright
let successMsg = chalk.bgGreenBright.white;

try {
    await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
    console.log(successMsg('Connected to db'))
}catch(err){
    console.log(errorMsg(err))
}

app.listen(process.env.PORT,(err)=>{
    err ? console.log(errorMsg(err)):console.log( successMsg(`Server Started listening port ${process.env.PORT}`));
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/styles'));
app.use(methodOverride('_method'));
app.get('/',function (req,res){
    const title = 'Main Page'
    res.render(createPath('index'),{title});
});
app.use(postRoutes);
app.use(contactRoute);
app.use(apiPostRoutes);
app.use((req,res)=>{
    const title = 'Error'
    res.status(404).render(createPath('error'),{title});
});