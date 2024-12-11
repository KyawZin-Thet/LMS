import express from "express";
import { lectures } from "../controller/lectureController";

export const lectureRouter = express.Router();

lectureRouter.get("/", lectures);
lectureRouter.post("/", lectures);
// lectureRouter.post("/",lectures.createLecture)
// lectureRouter.delete("/",lectures.deleteLecture)
