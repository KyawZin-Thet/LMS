import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export const getAllLectureCategories = async (req: Request, res: Response) => {
  try {
    const allLectureCategories = await prisma.lectureCategory.findMany();
    if (!allLectureCategories) throw Error("No lectureCategories found");
    res.status(200).json(allLectureCategories);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
