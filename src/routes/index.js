import express from "express";
import auth from  "./authentication";
import newsletterRouter from "./newsletter";


const mainRouter = express.Router();

mainRouter.use("/auth", auth);
mainRouter.use("/newsletter", newsletterRouter);

export default mainRouter;