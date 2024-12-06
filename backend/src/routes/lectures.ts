import express from "express";
import { lectures } from "../controller/lectureContrller";

export const lectureRouter = express.Router();

lectureRouter.get("/", lectures.getAllLectures);
// lectureRouter.post("/",lectures.createLecture)
// lectureRouter.delete("/",lectures.deleteLecture)
