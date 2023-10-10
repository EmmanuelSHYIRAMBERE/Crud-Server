import express from "express";
import { getAuth } from "../controllers/authentication";
const auth = express.Router();

auth.get("/auth", getAuth);

export default auth;
