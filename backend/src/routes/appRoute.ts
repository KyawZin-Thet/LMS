import express from "express";
import { firstfunction } from "./../controller/appController";
export const appRouter = express.Router();
appRouter.get("/", firstfunction);
