import express from "express";
import { getAllStudents } from "./../controller/studentController";
export const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
