import express from "express";
import {logger, verifyToken} from "../middleware";
import { login, signUp, changePassword } from "../controllers/authentication";
import { findAllUsers } from "../controllers/authentication";
import { findOneUser } from "../controllers/authentication";
import { findOneAndReplace } from "../controllers/authentication";


const auth = express.Router();

auth.post("/login", login);
auth.post("/signup", logger, signUp);

auth.use(verifyToken);
auth.get("/", findAllUsers);
auth.get("/:id", findOneUser);
auth.put("/put/:id", findOneAndReplace);
auth.post("/changepassword", changePassword);


export default auth;
