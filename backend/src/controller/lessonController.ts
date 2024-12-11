import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export const getAllLessons = async (req: Request, res: Response) => {
  try {
    const allLessons = await prisma.user.findMany();
    if (!allLessons) throw Error("No lessons found");
    res.status(200).json(allLessons);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
