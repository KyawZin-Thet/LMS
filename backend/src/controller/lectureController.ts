import { Request, Response } from "express";

export const lectures = async (req: Request, res: Response) => {
  console.log("runned");
  //const getAllLectures = await prisma.lecture.findMany();
  console.log("finded lectures");
};
