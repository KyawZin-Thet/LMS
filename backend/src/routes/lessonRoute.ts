import express from "express";
import { getAllLessons } from "./../controller/lessonController";
export const userRouter = express.Router();

userRouter.get("/", getAllLessons);
