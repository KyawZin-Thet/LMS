import express from "express";
import { getAllLessons, storeLessons } from "./../controller/lessonController";
export const lessonRouter = express.Router();

lessonRouter.get("/", getAllLessons);
lessonRouter.post("/", storeLessons);
