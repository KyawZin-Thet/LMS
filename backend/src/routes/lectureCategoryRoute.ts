import express from "express";
import { getAllLectureCategories } from "./../controller/lectureCategoryController";
export const lectureCategoryRouter = express.Router();

lectureCategoryRouter.get("/", getAllLectureCategories);
