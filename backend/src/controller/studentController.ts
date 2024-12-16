import bcrypt from "bcrypt";
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

export const storeStudents = async (req: Request, res: Response) => {
  const { name, email, password, phone, assetUrl } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newStudent = await prisma.student.create({
      data: { name, email, password: hashPassword, phone, assetUrl },
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
