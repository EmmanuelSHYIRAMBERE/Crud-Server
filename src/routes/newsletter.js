const express = require('express')
const newsletterRouter = express.Router();
const getOneLetter  = require ("../controllers/newsletter/getById.js");
const getAll = require("../controllers/newsletter/getAll.js");
const addNewsletter  = require ("../controllers/newsletter/addNewsletter.js");
const UpdateData  = require ("../controllers/newsletter/Patch.js");
const putData  = require ("../controllers/newsletter/putData.js");
const RemoveData  = require ("../controllers/newsletter/RemoveData.js");

newsletterRouter.get("/",getAll);

newsletterRouter.get("/:id", getOneLetter);

newsletterRouter.post("/", addNewsletter);

newsletterRouter.put("/:id", putData);

newsletterRouter.patch("/:id", UpdateData);
  

newsletterRouter.delete("/:id", RemoveData);



module.exports =  newsletterRouter;