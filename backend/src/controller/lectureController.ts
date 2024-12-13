import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export const getAllLectures = async (req: Request, res: Response) => {
  try {
    const allLectures = await prisma.lecture.findMany();
    if (!allLectures) throw Error("No lectures found");
    res.status(200).json(allLectures);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export const createLectures = async (req: Request, res: Response) => {
  const { title, description, isPremium, categories, price, discount_price } =
    req.body;
  try {
    const newLecture = await prisma.lecture.create({
      data: { title, description, isPremium, price, discount_price },
    });
    const data = await prisma.$transaction(
      categories.map((id: number) =>
        prisma.lectureonCategory.create({
          data: { lectureId: newLecture.id, lectureCategoryId: id },
        })
      )
    );
    res.status(200).json(newLecture);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
