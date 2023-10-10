import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {logger} from "./src/middleware";
import appRouter from "./src/routes";

const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(logger);

app.use("/api", appRouter);

const port = 3000;

const DB_connect_prod = 'mongodb+srv://emashyirambere1:oSO7Ui6Fqs7PLBVs@cluster0.mdpmfpm.mongodb.net/express-server';

const DB_connect_dev = 'mongodb://localhost:27017/express-server';


mongoose.set("strictQuery", false)

mongoose.connect(DB_connect_dev).then(() => {
    console.log(`connected to mongo DB`)
    app.listen(3000, ()=> {
        console.log('Node API app is running on port 3000')
    })

}) .catch ((error) => {
    console.log(error)
})
