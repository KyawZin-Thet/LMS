import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const allStudents = await prisma.student.findMany();
    if (!allStudents) throw Error("No students found");
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
