import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export const lectures = async (req: Request, res: Response) => {
  const getAllLectures = await prisma.lecture.findMany();
};
