import express from "express";
import { verifyToken } from "../middleware";
import { admin } from "../middleware";

const newsletterRouter = express.Router();


import {addNewsletter, getOneLetter, getAll, putData, UpdateData,RemoveData} from "../controllers/newsletter/";




// const getOneLetter  = require ("../controllers/newsletter/getById.js");
// const getAll = require("../controllers/newsletter/getAll.js");
// const addNewsletter  = require ("../controllers/newsletter/addNewsletter.js");
// const UpdateData  = require ("../controllers/newsletter/Patch.js");
// const putData  = require ("../controllers/newsletter/putData.js");
// const RemoveData  = require ("../controllers/newsletter/RemoveData.js");


newsletterRouter.use(verifyToken);

newsletterRouter.get("/:id", getOneLetter);

newsletterRouter.get("/",getAll);

newsletterRouter.post("/", admin, addNewsletter);

newsletterRouter.put("/:id", putData);

newsletterRouter.patch("/:id", UpdateData);
  

newsletterRouter.delete("/:id", RemoveData);





export default newsletterRouter;