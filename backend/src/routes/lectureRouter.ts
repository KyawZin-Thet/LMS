import express from "express";
import {
  createLectures,
  getAllLectures,
} from "./../controller/lectureController";

export const lectureRouter = express.Router();

lectureRouter.get("/", getAllLectures);
lectureRouter.post("/", createLectures);
// lectureRouter.post("/",lectures.createLecture)
// lectureRouter.delete("/",lectures.deleteLecture)
