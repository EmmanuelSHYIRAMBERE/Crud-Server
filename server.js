import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
import appRouter from "./src/routes";

const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use("/api", appRouter);

const port = 3000;


mongoose.set("strictQuery", false)

mongoose.connect(process.env.DB_connect_dev).then((res) => {
    console.log(`connected to mongo DB`)
    app.listen(port, ()=> {
        console.log('Node API app is running on port 3000');
    })

}) .catch ((error) => {
    console.log(error)
})
