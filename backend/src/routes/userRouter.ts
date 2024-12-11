import express from "express";
import { getAllusers } from "./../controller/userController";
export const userRouter = express.Router();

userRouter.get("/", getAllusers);
