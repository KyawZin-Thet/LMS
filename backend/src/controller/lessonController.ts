import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export const getAllLessons = async (req: Request, res: Response) => {
  try {
    const allLessons = await prisma.lesson.findMany();
    if (!allLessons) throw Error("No lessons found");
    res.status(200).json(allLessons);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export const storeLessons = async (req: Request, res: Response) => {
  const { title, description, content, assetImage, assetVideo, lectureId } =
    req.body;
  try {
    const newLesson = await prisma.lesson.create({
      data: { title, description, content, assetImage, assetVideo, lectureId },
    });
    return res.status(200).json({ newLesson });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// export const storeLessons = async (req: Request, res: Response) => {
//   const { title, description, content, assetImage, assetVideo, lectureId } =
//     req.body;
//   try {
//     const newLesson = await prisma.lesson.create({
//       data: { title, description, content, assetImage, assetVideo, lectureId },
//     });
//     return res.status(200).json({ newLesson });
//   } catch (err) {
//     res.status(404).json({ message: err });
//   }
// };
