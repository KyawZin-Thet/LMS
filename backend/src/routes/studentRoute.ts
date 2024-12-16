import express from "express";
import {
  getAllStudents,
  storeStudents,
} from "./../controller/studentController";
export const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/", storeStudents);
