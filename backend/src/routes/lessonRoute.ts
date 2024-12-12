import express from "express";
import { getAllLessons } from "./../controller/lessonController";
export const lessonRouter = express.Router();

lessonRouter.get("/", getAllLessons);
