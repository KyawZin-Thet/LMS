import { Request, Response } from "express";
import { prisma } from "../../utils/db";

export const getAllusers = async (req: Request, res: Response) => {
  console.log("runned");
  try {
    const getAllusers = await prisma.user.findMany();
    if (!getAllusers) throw Error("No users found");
    res.status(200).json(getAllusers);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
